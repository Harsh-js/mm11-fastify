// @ts-ignore
// @ts-nocheck

var Leaderboard;

const redis = require("redis");
// const asyncRedis = require("ioredis");
const config = require("@config/redis");
Leaderboard = (function () {
	/*
	 * Default page size: 25
	 */
	var DEFAULT_OPTIONS, DEFAULT_REDIS_OPTIONS;

	Leaderboard.DEFAULT_PAGE_SIZE = 25;

	/*
	 * Default options when creating a leaderboard. Page size is 25 and reverse
	 * is set to false, meaning various methods will return results in
	 * highest-to-lowest order.
	 */

	DEFAULT_OPTIONS = {
		pageSize: Leaderboard.DEFAULT_PAGE_SIZE,
		reverse: false,
		memberKey: "member",
		rankKey: "rank",
		scoreKey: "score",
		memberDataKey: "member_data",
		memberDataNamespace: "member_data",
		prizeKey: "prize",
	};

	/*
	 * Create a new instance of a leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param options [Hash] Options for the leaderboard such as +'pageSize'+.
	 * @param redisOptions [Hash] Options for configuring Redis.
	 */

	function Leaderboard(leaderboardName, options) {
		this.leaderboardName = leaderboardName;

		if (options == null) {
			options = DEFAULT_OPTIONS;
		}

		const redisOptions = {
			host: config.host,
			port: config.port,
			prefix: config.prefix,
			// password: config.password,
		};

		this.reverse = options["reverse"];
		this.pageSize = options["pageSize"];
		if (this.pageSize === null || this.pageSize < 1) {
			this.pageSize = Leaderboard.DEFAULT_PAGE_SIZE;
		}
		this.memberKeyOption = options["memberKey"] || "member";
		this.rankKeyOption = options["rankKey"] || "rank";
		this.scoreKeyOption = options["scoreKey"] || "score";
		this.memberDataKeyOption = options["memberDataKey"] || "member_data";
		this.memberDataNamespace = options["memberDataNamespace"] || "member_data";
		this.prizeKeyOptions = options["prizeKey"] || "prize";

		this.redisConnection = redis.createClient(redisOptions);

		// this.redisConnection = new asyncRedis.Cluster([
		// 	{

		// 		host: "mm11-prod-redis-server-cluster-0001-001.7wpgjd.0001.aps1.cache.amazonaws.com",
		// 		port: 6379,
		// 		connect_timeout: 15000,
		// 		max_attempts: 1,
		// 		retry_max_delay: 5000,

		// 	},
		// ]);
	}

	/*
	 * Disconnect the Redis connection.
	 */

	Leaderboard.prototype.disconnect = function () {
		return this.redisConnection.quit(function (err, reply) {});
	};

	/*
	 * Delete the current leaderboard.
	 *
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.deleteLeaderboard = function (callback) {
		return this.deleteLeaderboardNamed(this.leaderboardName, callback);
	};

	/*
	 * Delete the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.deleteLeaderboardNamed = function (
		leaderboardName,
		callback,
	) {
		var transaction;
		transaction = this.redisConnection.multi();
		transaction.del(leaderboardName);
		transaction.del(this.memberDataKey(leaderboardName));
		return transaction.exec(function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Rank a member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMember = function (
		member, // user team id
		score, // team points default 0
		memberData, // user data
		callback,
	) {
		if (memberData == null) {
			memberData = null;
		}
		return this.rankMemberInTest(
			this.leaderboardName,
			member,
			score,
			memberData,
			callback,
		);
	};

	/*
	 * Rank a member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMemberIn = function (
		leaderboardName,
		member,
		score,
		memberData,
		callback,
	) {
		var transaction;
		if (memberData == null) {
			memberData = null;
		}
		transaction = this.redisConnection.multi();
		transaction.zadd(leaderboardName, score, member);
		if (memberData != null) {
			transaction.hset(this.memberDataKey(leaderboardName), member, memberData);
		}
		return transaction.exec(function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Rank a member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMemberInTest = function (
		leaderboardName,
		member,
		score,
		memberData,
		callback,
	) {
		var transaction;
		if (memberData == null) {
			memberData = null;
		}
		// transaction = this.redisConnection.multi();
		transaction = this.redisConnection;
		transaction.zadd(leaderboardName, score, member);
		if (memberData != null) {
			transaction.hset(this.memberDataKey(leaderboardName), member, memberData);
		}
		return callback(true);
		// return transaction.exec(function (err, reply) {
		// 	if (callback) {
		// 		return callback(reply);
		// 	}
		// });
	};

	/*
	 * Rank a member across multiple leaderboards.
	 *
	 * @param leaderboards [Array] Leaderboard names.
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param member_data [String] Optional member data.
	 */

	Leaderboard.prototype.rankMemberAcross = function (
		leaderboardNames,
		member,
		score,
		memberData,
		callback,
	) {
		var leaderboardName, transaction, _i, _len;
		if (memberData == null) {
			memberData = null;
		}
		transaction = this.redisConnection.multi();
		for (_i = 0, _len = leaderboardNames.length; _i < _len; _i++) {
			leaderboardName = leaderboardNames[_i];
			transaction.zadd(leaderboardName, score, member);
			if (memberData != null) {
				transaction.hset(
					this.memberDataKey(leaderboardName),
					member,
					memberData,
				);
			}
		}
		return transaction.exec(function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Rank a member in the leaderboard based on execution of the +rankConditional+.
	 *
	 * The +rankConditional+ is passed the following parameters:
	 *   member: Member name.
	 *   currentScore: Current score for the member in the leaderboard.
	 *   score: Member score.
	 *   memberData: Optional member data.
	 *   options: Leaderboard options, e.g. 'reverse': Value of reverse option
	 *
	 * @param rankConditional [Function] Function which must return +true+ or +false+ that controls whether or not the member is ranked in the leaderboard.
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param currentScore [float] Current score.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMemberIf = function (
		rankConditional,
		member,
		score,
		currentScore,
		memberData,
		callback,
	) {
		if (memberData == null) {
			memberData = null;
		}
		return this.rankMemberIfIn(
			this.leaderboardName,
			rankConditional,
			member,
			score,
			currentScore,
			memberData,
			callback,
		);
	};

	/*
	 * Rank a member in the named leaderboard based on execution of the +rankConditional+.
	 *
	 * The +rankConditional+ is passed the following parameters:
	 *   member: Member name.
	 *   currentScore: Current score for the member in the leaderboard.
	 *   score: Member score.
	 *   memberData: Optional member data.
	 *   options: Leaderboard options, e.g. 'reverse': Value of reverse option
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param rankConditional [Function] Function which must return +true+ or +false+ that controls whether or not the member is ranked in the leaderboard.
	 * @param member [String] Member name.
	 * @param score [float] Member score.
	 * @param currentScore [float] Current score.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMemberIfIn = function (
		leaderboardName,
		rankConditional,
		member,
		score,
		currentScore,
		memberData,
		callback,
	) {
		if (memberData == null) {
			memberData = null;
		}
		if (
			rankConditional(member, currentScore, score, memberData, {
				reverse: this.reverse,
			})
		) {
			return this.rankMemberIn(
				leaderboardName,
				member,
				score,
				memberData,
				callback,
			);
		} else {
			if (callback) {
				return callback(0);
			}
		}
	};

	/*
	 * Rank an array of members in the leaderboard.
	 *
	 * @param membersAndScores [Array] Variable list of members and scores.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMembers = function (membersAndScores, callback) {
		return this.rankMembersIn(this.leaderboardName, membersAndScores, callback);
	};

	/*
	 * Rank an array of members in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param membersAndScores [Array] Variable list of members and scores
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.rankMembersIn = function (
		leaderboardName,
		membersAndScores,
		callback,
	) {
		var index, slice, transaction, _i, _ref;
		transaction = this.redisConnection.multi();
		for (
			index = _i = 0, _ref = membersAndScores.length;
			_i < _ref;
			index = _i += 2
		) {
			slice = membersAndScores.slice(index, index + 2);
			transaction.zadd(leaderboardName, slice[1], slice[0]);
		}
		return transaction.exec(function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Retrieve the optional member data for a given member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return String of optional member data.
	 */

	Leaderboard.prototype.memberDataFor = function (member, callback) {
		return this.memberDataForIn(this.leaderboardName, member, callback);
	};

	/*
	 * Retrieve the optional member data for a given member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return String of optional member data.
	 */

	Leaderboard.prototype.memberDataForIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.hget(
			this.memberDataKey(leaderboardName),
			member,
			function (err, reply) {
				return callback(reply);
			},
		);
	};

	/*
	 * Update the optional member data for a given member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.updateMemberData = function (
		member,
		memberData,
		callback,
	) {
		return this.updateMemberDataFor(
			this.leaderboardName,
			member,
			memberData,
			callback,
		);
	};

	/*
	 * Update the optional member data for a given member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param memberData [String] Optional member data.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.updateMemberDataFor = function (
		leaderboardName,
		member,
		memberData,
		callback,
	) {
		return this.redisConnection.hset(
			this.memberDataKey(leaderboardName),
			member,
			memberData,
			function (err, reply) {
				if (callback) {
					return callback(reply);
				}
			},
		);
	};

	/*
	 * Remove the optional member data for a given member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.removeMemberData = function (member, callback) {
		return this.remberMemberDataFor(this.leaderboardName, member, callback);
	};

	/*
	 * Remove the optional member data for a given member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.remberMemberDataFor = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.hdel(
			this.memberDataKey(leaderboardName),
			member,
			function (err, reply) {
				if (callback) {
					return callback(reply);
				}
			},
		);
	};

	/*
	 * Remove a member from the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.removeMember = function (member, callback) {
		return this.removeMemberFrom(this.leaderboardName, member, callback);
	};

	/*
	 * Remove a member from the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.removeMemberFrom = function (
		leaderboardName,
		member,
		callback,
	) {
		var transaction;
		transaction = this.redisConnection.multi();
		transaction.zrem(leaderboardName, member);
		transaction.hdel(this.memberDataKey(leaderboardName), member);
		return transaction.exec(function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Retrieve the total number of members in the leaderboard.
	 *
	 * @return total number of members in the leaderboard.
	 * @param callback Callback for result of call.
	 */

	Leaderboard.prototype.totalMembers = function (callback) {
		return this.totalMembersIn(this.leaderboardName, callback);
	};

	/*
	 * Retrieve the total number of members in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return the total number of members in the named leaderboard.
	 */

	Leaderboard.prototype.totalMembersIn = function (leaderboardName, callback) {
		return this.redisConnection.zcard(leaderboardName, function (err, reply) {
			return callback(reply);
		});
	};

	/*
	 * Retrieve the total number of pages in the leaderboard.
	 *
	 * @param pageSize [int, nil] Page size to be used when calculating the total number of pages.
	 * @param callback Callback for result of call.
	 *
	 * @return the total number of pages in the leaderboard.
	 */

	Leaderboard.prototype.totalPages = function (pageSize, callback) {
		if (pageSize == null) {
			pageSize = null;
		}
		return this.totalPagesIn(this.leaderboardName, pageSize, callback);
	};

	/*
	 * Retrieve the total number of pages in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param pageSize [int, nil] Page size to be used when calculating the total number of pages.
	 * @param callback Callback for result of call.
	 *
	 * @return the total number of pages in the named leaderboard.
	 */

	Leaderboard.prototype.totalPagesIn = function (
		leaderboardName,
		pageSize,
		callback,
	) {
		if (pageSize == null) {
			pageSize = null;
		}
		if (pageSize == null) {
			pageSize = this.pageSize;
		}
		return this.redisConnection.zcard(leaderboardName, function (err, reply) {
			return callback(Math.ceil(reply / pageSize));
		});
	};

	/*
	 * Retrieve the total members in a given score range from the leaderboard.
	 *
	 * @param minScore [float] Minimum score.
	 * @param maxScore [float] Maximum score.
	 * @param callback Callback for result of call.
	 *
	 * @return the total members in a given score range from the leaderboard.
	 */

	Leaderboard.prototype.totalMembersInScoreRange = function (
		minScore,
		maxScore,
		callback,
	) {
		return this.totalMembersInScoreRangeIn(
			this.leaderboardName,
			minScore,
			maxScore,
			callback,
		);
	};

	/*
	 * Retrieve the total members in a given score range from the named leaderboard.
	 *
	 * @param leaderboard_name Name of the leaderboard.
	 * @param minScore [float] Minimum score.
	 * @param maxScore [float] Maximum score.
	 * @param callback Callback for result of call.
	 *
	 * @return the total members in a given score range from the named leaderboard.
	 */

	Leaderboard.prototype.totalMembersInScoreRangeIn = function (
		leaderboardName,
		minScore,
		maxScore,
		callback,
	) {
		return this.redisConnection.zcount(
			leaderboardName,
			minScore,
			maxScore,
			function (err, reply) {
				return callback(reply);
			},
		);
	};

	/*
	 * Change the score for a member in the leaderboard by a score delta which can be positive or negative.
	 *
	 * @param member [String] Member name.
	 * @param delta [float] Score change.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.changeScoreFor = function (member, delta, callback) {
		return this.changeScoreForMemberIn(
			this.leaderboardName,
			member,
			delta,
			callback,
		);
	};

	/*
	 * Change the score for a member in the named leaderboard by a delta which can be positive or negative.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param delta [float] Score change.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.changeScoreForMemberIn = function (
		leaderboardName,
		member,
		delta,
		callback,
	) {
		return this.redisConnection.zincrby(
			leaderboardName,
			delta,
			member,
			function (err, reply) {
				if (callback) {
					return callback(reply);
				}
			},
		);
	};

	/*
	 * Retrieve the rank for a member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the rank for a member in the leaderboard.
	 */

	Leaderboard.prototype.rankFor = function (member, callback) {
		return this.rankForIn(this.leaderboardName, member, callback);
	};

	/*
	 * Retrieve the rank for a member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the rank for a member in the leaderboard.
	 */

	Leaderboard.prototype.rankForIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.zscore(
			leaderboardName,
			member,
			(function (_this) {
				return function (err, score) {
					if (_this.reverse) {
						return _this.redisConnection.zcount(
							leaderboardName,
							"-inf",
							"(" + score,
							function (err, memberScore) {
								return callback(memberScore + 1);
							},
						);
					} else {
						return _this.redisConnection.zcount(
							leaderboardName,
							"(" + score,
							"+inf",
							function (err, memberScore) {
								return callback(memberScore + 1);
							},
						);
					}
				};
			})(this),
		);
	};

	/*
	 * Retrieve the score for a member in the leaderboard.
	 *
	 * @param member Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the score for a member in the leaderboard or +nil+ if the member is not in the leaderboard.
	 */

	Leaderboard.prototype.scoreFor = function (member, callback) {
		return this.scoreForIn(this.leaderboardName, member, callback);
	};

	/*
	 * Retrieve the score for a member in the named leaderboard.
	 *
	 * @param leaderboardName Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the score for a member in the leaderboard or +nil+ if the member is not in the leaderboard.
	 */

	Leaderboard.prototype.scoreForIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.zscore(
			leaderboardName,
			member,
			function (err, reply) {
				if (reply != null) {
					return callback(parseFloat(reply));
				} else {
					return callback(null);
				}
			},
		);
	};

	/*
	 * Check to see if a member exists in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return +true+ if the member exists in the leaderboard, +false+ otherwise.
	 */

	Leaderboard.prototype.checkMember = function (member, callback) {
		return this.checkMemberIn(this.leaderboardName, member, callback);
	};

	/*
	 * Check to see if a member exists in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return +true+ if the member exists in the named leaderboard, +false+ otherwise.
	 */

	Leaderboard.prototype.checkMemberIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.zscore(
			leaderboardName,
			member,
			function (err, reply) {
				return callback(reply != null);
			},
		);
	};

	/*
	 * Retrieve the score and rank for a member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the score and rank for a member in the leaderboard as a Hash.
	 */

	Leaderboard.prototype.scoreAndRankFor = function (member, callback) {
		return this.scoreAndRankForIn(this.leaderboardName, member, callback);
	};

	/*
	 * Retrieve the score and rank for a member in the named leaderboard.
	 *
	 * @param leaderboardName [String]Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the score and rank for a member in the named leaderboard as a Hash.
	 */

	Leaderboard.prototype.scoreAndRankForIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.redisConnection.zscore(
			leaderboardName,
			member,
			(function (_this) {
				return function (err, memberScore) {
					var transaction;
					transaction = _this.redisConnection.multi();
					transaction.zscore(leaderboardName, member);
					if (_this.reverse) {
						transaction.zrank(leaderboardName, memberScore);
					} else {
						transaction.zrevrank(leaderboardName, memberScore);
					}
					return transaction.exec(function (err, replies) {
						var scoreAndRankData;
						if (replies) {
							scoreAndRankData = {};
							if (replies[0] != null) {
								scoreAndRankData[_this.scoreKeyOption] = parseFloat(replies[0]);
							} else {
								scoreAndRankData[_this.scoreKeyOption] = null;
							}
							if (replies[0] != null) {
								if (_this.reverse) {
									return _this.redisConnection.zcount(
										leaderboardName,
										"-inf",
										"(" + replies[0],
										function (err, count) {
											scoreAndRankData[_this.rankKeyOption] = count + 1;
											scoreAndRankData[_this.memberKeyOption] = member;
											return callback(scoreAndRankData);
										},
									);
								} else {
									return _this.redisConnection.zcount(
										leaderboardName,
										"(" + replies[0],
										"+inf",
										function (err, count) {
											scoreAndRankData[_this.rankKeyOption] = count + 1;
											scoreAndRankData[_this.memberKeyOption] = member;
											return callback(scoreAndRankData);
										},
									);
								}
							} else {
								scoreAndRankData[_this.rankKeyOption] = null;
								scoreAndRankData[_this.memberKeyOption] = member;
								return callback(scoreAndRankData);
							}
						}
					});
				};
			})(this),
		);
	};

	/*
	 * Remove members from the leaderboard in a given score range.
	 *
	 * @param minScore [float] Minimum score.
	 * @param maxScore [float] Maximum score.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.removeMembersInScoreRange = function (
		minScore,
		maxScore,
		callback,
	) {
		return this.removeMembersInScoreRangeIn(
			this.leaderboardName,
			minScore,
			maxScore,
			callback,
		);
	};

	/*
	 * Remove members from the named leaderboard in a given score range.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param minScore [float] Minimum score.
	 * @param maxScore [float] Maximum score.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.removeMembersInScoreRangeIn = function (
		leaderboardName,
		minScore,
		maxScore,
		callback,
	) {
		return this.redisConnection.zremrangebyscore(
			leaderboardName,
			minScore,
			maxScore,
			function (err, reply) {
				if (callback) {
					return callback(reply);
				}
			},
		);
	};

	/*
	 * Remove members from the leaderboard outside a given rank.
	 *
	 * @param rank [int] The rank (inclusive) which we should keep.
	 * @param callback Optional callback for result of call.
	 * @return the total number of members removed.
	 */

	Leaderboard.prototype.removeMembersOutsideRank = function (rank, callback) {
		return this.removeMembersOutsideRankIn(
			this.leaderboardName,
			rank,
			callback,
		);
	};

	/*
	 * Remove members from the leaderboard outside a given rank.
	 *
	 * @param leaderboard_name [String] Name of the leaderboard.
	 * @param rank [int] The rank (inclusive) which we should keep.
	 * @param callback Optional callback for result of call.
	 * @return the total number of members removed.
	 */

	Leaderboard.prototype.removeMembersOutsideRankIn = function (
		leaderboardName,
		rank,
		callback,
	) {
		if (this.reverse) {
			return this.redisConnection.zremrangebyrank(
				leaderboardName,
				rank,
				-1,
				function (err, reply) {
					if (callback) {
						return callback(reply);
					}
				},
			);
		} else {
			return this.redisConnection.zremrangebyrank(
				leaderboardName,
				0,
				-rank - 1,
				function (err, reply) {
					if (callback) {
						return callback(reply);
					}
				},
			);
		}
	};

	/*
	 * Retrieve the percentile for a member in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the percentile for a member in the leaderboard. Return +nil+ for a non-existent member.
	 */

	Leaderboard.prototype.percentileFor = function (member, callback) {
		return this.percentileForIn(this.leaderboardName, member, callback);
	};

	/*
	 * Retrieve the percentile for a member in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param callback Callback for result of call.
	 *
	 * @return the percentile for a member in the named leaderboard.
	 */

	Leaderboard.prototype.percentileForIn = function (
		leaderboardName,
		member,
		callback,
	) {
		return this.checkMemberIn(
			leaderboardName,
			member,
			(function (_this) {
				return function (reply) {
					var transaction;
					if (reply) {
						transaction = _this.redisConnection.multi();
						transaction.zcard(leaderboardName);
						transaction.zrevrank(leaderboardName, member);
						return transaction.exec(function (err, replies) {
							var percentile;
							if (replies) {
								percentile = Math.ceil(
									parseFloat(
										(parseFloat(replies[0] - replies[1] - 1) /
											parseFloat(replies[0])) *
											100,
									),
								);
								if (this.reverse) {
									return callback(100 - percentile);
								} else {
									return callback(percentile);
								}
							}
						});
					} else {
						return callback();
					}
				};
			})(this),
		);
	};

	/*
	 * Calculate the score for a given percentile value in the leaderboard.
	 *
	 * @param percentile [float] Percentile value (0.0 to 100.0 inclusive)
	 * @param callback Callback for result of call.
	 *
	 * @return the calculated score for the requested percentile value. Return +nil+ for an invalid (outside 0-100) percentile or a leaderboard with no members.
	 */

	Leaderboard.prototype.scoreForPercentile = function (percentile, callback) {
		return this.scoreForPercentileIn(
			this.leaderboardName,
			percentile,
			callback,
		);
	};

	/*
	 * Calculate the score for a given percentile value in the leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param percentile [float] Percentile value (0.0 to 100.0 inclusive)
	 * @param callback Callback for result of call.
	 *
	 * @return the calculated score for the requested percentile value. Return +nil+ for an invalid (outside 0-100) percentile or a leaderboard with no members.
	 */

	Leaderboard.prototype.scoreForPercentileIn = function (
		leaderboardName,
		percentile,
		callback,
	) {
		if (!(0 <= percentile && percentile <= 100)) {
			return callback();
		}
		if (this.reverse) {
			percentile = 100 - percentile;
		}
		return this.totalMembersIn(
			leaderboardName,
			(function (_this) {
				return function (reply) {
					var index, totalMembers, zrange_args;
					totalMembers = reply;
					if (totalMembers === 0) {
						return callback();
					} else {
						index = (totalMembers - 1) * (percentile / 100);
						zrange_args = [
							leaderboardName,
							Math.floor(index),
							Math.ceil(index),
							"WITHSCORES",
						];
						return _this.redisConnection.zrange(
							zrange_args,
							function (err, reply) {
								var hiScore, interpolateFraction, lowScore;
								lowScore = parseFloat(reply[1]);
								if (index === Math.floor(index)) {
									return callback(lowScore);
								} else {
									interpolateFraction = index - Math.floor(index);
									hiScore = parseFloat(reply[3]);
									return callback(
										lowScore + interpolateFraction * (hiScore - lowScore),
									);
								}
							},
						);
					}
				};
			})(this),
		);
	};

	/*
	 * Determine the page where a member falls in the leaderboard.
	 *
	 * @param member [String] Member name.
	 * @param pageSize [int] Page size to be used in determining page location.
	 * @param callback Callback for result of call.
	 *
	 * @return the page where a member falls in the leaderboard.
	 */

	Leaderboard.prototype.pageFor = function (member, pageSize, callback) {
		if (pageSize == null) {
			pageSize = this.DEFAULT_PAGE_SIZE;
		}
		return this.pageForIn(this.leaderboardName, member, pageSize, callback);
	};

	/*
	 * Determine the page where a member falls in the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param pageSize [int] Page size to be used in determining page location.
	 * @param callback Callback for result of call.
	 *
	 * @return the page where a member falls in the leaderboard.
	 */

	Leaderboard.prototype.pageForIn = function (
		leaderboardName,
		member,
		pageSize,
		callback,
	) {
		var transaction;
		if (pageSize == null) {
			pageSize = this.DEFAULT_PAGE_SIZE;
		}
		transaction = this.redisConnection.multi();
		if (this.reverse) {
			transaction.zrank(leaderboardName, member);
		} else {
			transaction.zrevrank(leaderboardName, member);
		}
		return transaction.exec(function (err, replies) {
			var rankForMember;
			rankForMember = replies[0];
			if (rankForMember != null) {
				rankForMember += 1;
			} else {
				rankForMember = 0;
			}
			return callback(Math.ceil(rankForMember / pageSize));
		});
	};

	/*
	 * Expire the current leaderboard in a set number of seconds. Do not use this with
	 * leaderboards that utilize member data as there is no facility to cascade the
	 * expiration out to the keys for the member data.
	 *
	 * @param seconds [int] Number of seconds after which the leaderboard will be expired.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.expireLeaderboard = function (seconds, callback) {
		return this.expireLeaderboardFor(this.leaderboardName, seconds, callback);
	};

	/*
	 * Expire the given leaderboard in a set number of seconds. Do not use this with
	 * leaderboards that utilize member data as there is no facility to cascade the
	 * expiration out to the keys for the member data.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param seconds [int] Number of seconds after which the leaderboard will be expired.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.expireLeaderboardFor = function (
		leaderboardName,
		seconds,
		callback,
	) {
		var transaction;
		transaction = this.redisConnection.multi();
		transaction.expire(leaderboardName, seconds);
		transaction.expire(this.memberDataKey(leaderboardName), seconds);
		return transaction.exec(function (err, replies) {
			if (callback) {
				return callback(replies);
			}
		});
	};

	/*
	 * Expire the current leaderboard at a specific UNIX timestamp. Do not use this with
	 * leaderboards that utilize member data as there is no facility to cascade the
	 * expiration out to the keys for the member data.
	 *
	 * @param timestamp [int] UNIX timestamp at which the leaderboard will be expired.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.expireLeaderboardAt = function (timestamp, callback) {
		return this.expireLeaderboardAtFor(
			this.leaderboardName,
			timestamp,
			callback,
		);
	};

	/*
	 * Expire the given leaderboard at a specific UNIX timestamp. Do not use this with
	 * leaderboards that utilize member data as there is no facility to cascade the
	 * expiration out to the keys for the member data.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param timestamp [int] UNIX timestamp at which the leaderboard will be expired.
	 * @param callback Optional callback for result of call.
	 */

	Leaderboard.prototype.expireLeaderboardAtFor = function (
		leaderboardName,
		timestamp,
		callback,
	) {
		var transaction;
		transaction = this.redisConnection.multi();
		transaction.expireat(leaderboardName, timestamp);
		transaction.expireat(this.memberDataKey(leaderboardName), timestamp);
		return transaction.exec(function (err, replies) {
			if (callback) {
				return callback(replies);
			}
		});
	};

	/*
	 * Retrieve a page of leaders from the leaderboard for a given list of members.
	 *
	 * @param members [Array] Member names.
	 * @param options [Hash] Options to be used when retrieving the page from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the leaderboard for a given list of members.
	 */

	Leaderboard.prototype.rankedInList = function (members, options, callback) {
		if (options == null) {
			options = {};
		}
		return this.rankedInListIn(
			this.leaderboardName,
			members,
			options,
			callback,
		);
	};

	/*
	 * Retrieve a page of leaders from the named leaderboard for a given list of members.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param members [Array] Member names.
	 * @param options [Hash] Options to be used when retrieving the page from the named leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the named leaderboard for a given list of members.
	 */

	Leaderboard.prototype.rankedInListIn = function (
		leaderboardName,
		members,
		options,
		callback,
	) {
		var member, ranksForMembers, transaction, _i, _len;
		if (options == null) {
			options = {};
		}
		if (members == null || members.length === 0) {
			return callback([]);
		}
		ranksForMembers = [];
		transaction = this.redisConnection.multi();

		if (!options["membersOnly"]) {
			for (_i = 0, _len = members.length; _i < _len; _i++) {
				member = members[_i];
				if (this.reverse) {
					transaction.zrank(leaderboardName, member);
				} else {
					transaction.zrevrank(leaderboardName, member);
				}
				transaction.zscore(leaderboardName, member);
			}
		}

		return transaction.exec(
			(function (_this) {
				return function (err, replies) {
					var index, _j, _len1, _results;
					_results = [];
					for (
						index = _j = 0, _len1 = members.length;
						_j < _len1;
						index = ++_j
					) {
						member = members[index];
						_results.push(
							(function (member) {
								var data;
								data = {};
								data[_this.memberKeyOption] = member;
								if (!options["membersOnly"]) {
									if (replies[index * 2 + 1]) {
										data[_this.scoreKeyOption] = parseFloat(
											replies[index * 2 + 1],
										);
									} else {
										data[_this.scoreKeyOption] = null;
										data[_this.rankKeyOption] = null;
									}
								}
								if (options["withMemberData"]) {
									return _this.memberDataForIn(
										leaderboardName,
										member,
										function (memberdata) {
											data[_this.memberDataKeyOption] = JSON.parse(memberdata);
											if (_this.reverse) {
												return _this.redisConnection.zcount(
													leaderboardName,
													"-inf",
													"(" + data[_this.scoreKeyOption],
													function (err, count) {
														data[_this.rankKeyOption] = count + 1;
														ranksForMembers.push(data);
														if (ranksForMembers.length === members.length) {
															switch (options["sortBy"]) {
																case "rank":
																	ranksForMembers.sort(function (a, b) {
																		return a.rank > b.rank;
																	});
																	break;
																case "score":
																	ranksForMembers.sort(function (a, b) {
																		return a.score > b.score;
																	});
															}
															return callback(ranksForMembers);
														}
													},
												);
											} else {
												return _this.redisConnection.zcount(
													leaderboardName,
													"(" + data[_this.scoreKeyOption],
													"+inf",
													function (err, count) {
														data[_this.rankKeyOption] = count + 1;
														ranksForMembers.push(data);
														if (ranksForMembers.length === members.length) {
															switch (options["sortBy"]) {
																case "rank":
																	ranksForMembers.sort(function (a, b) {
																		return a.rank > b.rank;
																	});
																	break;
																case "score":
																	ranksForMembers.sort(function (a, b) {
																		return a.score > b.score;
																	});
															}
															return callback(ranksForMembers);
														}
													},
												);
											}
										},
									);
								} else {
									if (_this.reverse) {
										return _this.redisConnection.zcount(
											leaderboardName,
											"-inf",
											"(" + data[_this.scoreKeyOption],
											function (err, count) {
												data[_this.rankKeyOption] = count + 1;
												ranksForMembers.push(data);
												if (ranksForMembers.length === members.length) {
													switch (options["sortBy"]) {
														case "rank":
															ranksForMembers.sort(function (a, b) {
																return a.rank > b.rank;
															});
															break;
														case "score":
															ranksForMembers.sort(function (a, b) {
																return a.score > b.score;
															});
													}
													return callback(ranksForMembers);
												}
											},
										);
									} else {
										return _this.redisConnection.zcount(
											leaderboardName,
											"(" + data[_this.scoreKeyOption],
											"+inf",
											function (err, count) {
												data[_this.rankKeyOption] = count + 1;
												ranksForMembers.push(data);
												if (ranksForMembers.length === members.length) {
													switch (options["sortBy"]) {
														case "rank":
															ranksForMembers.sort(function (a, b) {
																return a.rank > b.rank;
															});
															break;
														case "score":
															ranksForMembers.sort(function (a, b) {
																return a.score > b.score;
															});
													}
													return callback(ranksForMembers);
												}
											},
										);
									}
								}
							})(member),
						);
					}
					return _results;
				};
			})(this),
		);
	};

	/*
	 * Retrieve a page of leaders from the leaderboard.
	 *
	 * @param currentPage [int] Page to retrieve from the leaderboard.
	 * @param options [Hash] Options to be used when retrieving the page from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the leaderboard.
	 */

	Leaderboard.prototype.leaders = function (currentPage, options, callback) {
		if (options == null) {
			options = {};
		}

		return this.leadersIn(this.leaderboardName, currentPage, options, callback);
	};

	/*
	 * Retrieve a page of leaders from the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param currentPage [int] Page to retrieve from the named leaderboard.
	 * @param options [Hash] Options to be used when retrieving the page from the named leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the named leaderboard.
	 */

	Leaderboard.prototype.leadersIn = function (
		leaderboardName,
		currentPage,
		options,
		callback,
	) {
		var pageSize;
		if (options == null) {
			options = {};
		}
		if (currentPage < 1) {
			currentPage = 1;
		}

		pageSize = options["pageSize"] || this.pageSize;
		return this.totalPages(
			pageSize,
			(function (_this) {
				return function (totalPages) {
					var endingOffset, indexForRedis, startingOffset;
					if (currentPage > totalPages) {
						currentPage = totalPages;
					}
					indexForRedis = currentPage - 1;
					startingOffset = indexForRedis * pageSize;
					endingOffset = startingOffset + pageSize - 1;

					if (_this.reverse) {
						return _this.redisConnection.zrange(
							leaderboardName,
							startingOffset,
							endingOffset,
							function (err, reply) {
								return _this.rankedInListIn(
									leaderboardName,
									reply,
									options,
									callback,
								);
							},
						);
					} else {
						return _this.redisConnection.zrevrange(
							leaderboardName,
							startingOffset,
							endingOffset,
							function (err, reply) {
								return _this.rankedInListIn(
									leaderboardName,
									reply,
									options,
									callback,
								);
							},
						);
					}
				};
			})(this),
		);
	};

	/*
	 * Retrieve all leaders from the leaderboard.
	 *
	 * @param options [Hash] Options to be used when retrieving the leaders from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return the leaders from the leaderboard.
	 */

	Leaderboard.prototype.allLeaders = function (options, callback) {
		if (options == null) {
			options = {};
		}
		return this.allLeadersFrom(this.leaderboardName, options, callback);
	};

	/*
	 * Retrieves all leaders from the named leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param options [Hash] Options to be used when retrieving the leaders from the named leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return the named leaderboard.
	 */

	Leaderboard.prototype.allLeadersFrom = function (
		leaderboardName,
		options,
		callback,
	) {
		if (options == null) {
			options = {};
		}
		if (this.reverse) {
			return this.redisConnection.zrange(
				leaderboardName,
				0,
				-1,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		} else {
			return this.redisConnection.zrevrange(
				leaderboardName,
				0,
				-1,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		}
	};

	/*
	 * Retrieve members from the leaderboard within a given score range.
	 *
	 * @param minimumScore [float] Minimum score (inclusive).
	 * @param maximumScore [float] Maximum score (inclusive).
	 * @param options [Hash] Options to be used when retrieving the data from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return members from the leaderboard that fall within the given score range.
	 */

	Leaderboard.prototype.membersFromScoreRange = function (
		minimumScore,
		maximumScore,
		options,
		callback,
	) {
		if (options == null) {
			options = {};
		}
		return this.membersFromScoreRangeIn(
			this.leaderboardName,
			minimumScore,
			maximumScore,
			options,
			callback,
		);
	};

	/*
	 * Retrieve members from the named leaderboard within a given score range.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param minimumScore [float] Minimum score (inclusive).
	 * @param maximumScore [float] Maximum score (inclusive).
	 * @param options [Hash] Options to be used when retrieving the data from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return members from the leaderboard that fall within the given score range.
	 */

	Leaderboard.prototype.membersFromScoreRangeIn = function (
		leaderboardName,
		minimumScore,
		maximumScore,
		options,
		callback,
	) {
		if (options == null) {
			options = {};
		}
		if (this.reverse) {
			return this.redisConnection.zrangebyscore(
				leaderboardName,
				minimumScore,
				maximumScore,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		} else {
			return this.redisConnection.zrevrangebyscore(
				leaderboardName,
				maximumScore,
				minimumScore,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		}
	};

	/*
	 * Retrieve members from the leaderboard within a given rank range.
	 *
	 * @param startingRank [int] Starting rank (inclusive).
	 * @param endingRank [int] Ending rank (inclusive).
	 * @param options [Hash] Options to be used when retrieving the data from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return members from the leaderboard that fall within the given rank range.
	 */

	Leaderboard.prototype.membersFromRankRange = function (
		startingRank,
		endingRank,
		options,
		callback,
	) {
		if (options == null) {
			options = {};
		}
		return this.membersFromRankRangeIn(
			this.leaderboardName,
			startingRank,
			endingRank,
			options,
			callback,
		);
	};

	/*
	 * Retrieve members from the named leaderboard within a given rank range.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param startingRank [int] Starting rank (inclusive).
	 * @param endingRank [int] Ending rank (inclusive).
	 * @param options [Hash] Options to be used when retrieving the data from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return members from the leaderboard that fall within the given rank range.
	 */

	Leaderboard.prototype.membersFromRankRangeIn = function (
		leaderboardName,
		startingRank,
		endingRank,
		options,
		callback,
	) {
		startingRank -= 1;
		if (startingRank < 0) {
			startingRank = 0;
		}
		endingRank -= 1;
		if (endingRank < 0) {
			endingRank = 0;
		}
		if (this.reverse) {
			return this.redisConnection.zrange(
				leaderboardName,
				startingRank,
				endingRank,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		} else {
			return this.redisConnection.zrevrange(
				leaderboardName,
				startingRank,
				endingRank,
				(function (_this) {
					return function (err, reply) {
						return _this.rankedInListIn(
							leaderboardName,
							reply,
							options,
							callback,
						);
					};
				})(this),
			);
		}
	};

	/*
	 * Retrieve a member at the specified index from the leaderboard.
	 *
	 * @param position [int] Position in leaderboard.
	 * @param options [Hash] Options to be used when retrieving the member from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a member from the leaderboard.
	 */

	Leaderboard.prototype.memberAt = function (position, options, callback) {
		if (options == null) {
			options = {};
		}
		return this.memberAtIn(this.leaderboardName, position, options, callback);
	};

	/*
	 * Retrieve a member at the specified index from the leaderboard.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param position [int] Position in named leaderboard.
	 * @param options [Hash] Options to be used when retrieving the member from the named leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the named leaderboard.
	 */

	Leaderboard.prototype.memberAtIn = function (
		leaderboardName,
		position,
		options,
		callback,
	) {
		if (options == null) {
			options = {};
		}
		return this.membersFromRankRangeIn(
			leaderboardName,
			position,
			position,
			options,
			callback,
		);
	};

	/*
	 * Retrieve a page of leaders from the leaderboard around a given member.
	 *
	 * @param member [String] Member name.
	 * @param options [Hash] Options to be used when retrieving the page from the leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the leaderboard around a given member.
	 */

	Leaderboard.prototype.aroundMe = function (member, options, callback) {
		if (options == null) {
			options = {};
		}
		return this.aroundMeIn(this.leaderboardName, member, options, callback);
	};

	/*
	 * Retrieve a page of leaders from the named leaderboard around a given member.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 * @param member [String] Member name.
	 * @param options [Hash] Options to be used when retrieving the page from the named leaderboard.
	 * @param callback Callback for result of call.
	 *
	 * @return a page of leaders from the named leaderboard around a given member. Returns an empty array for a non-existent member.
	 */

	Leaderboard.prototype.aroundMeIn = function (
		leaderboardName,
		member,
		options,
		callback,
	) {
		var pageSize;
		if (options == null) {
			options = {};
		}
		pageSize = options["pageSize"] || this.pageSize;
		if (this.reverse) {
			return this.redisConnection.zrank(
				leaderboardName,
				member,
				(function (_this) {
					return function (err, reply) {
						var endingOffset, startingOffset;
						if (reply != null) {
							startingOffset = parseInt(Math.ceil(reply - pageSize / 2));
							if (startingOffset < 0) {
								startingOffset = 0;
							}
							endingOffset = startingOffset + pageSize - 1;
							return _this.redisConnection.zrange(
								leaderboardName,
								startingOffset,
								endingOffset,
								function (err, reply) {
									return _this.rankedInListIn(
										leaderboardName,
										reply,
										options,
										callback,
									);
								},
							);
						} else {
							callback([]);
							return [];
						}
					};
				})(this),
			);
		} else {
			return this.redisConnection.zrevrank(
				leaderboardName,
				member,
				(function (_this) {
					return function (err, reply) {
						var endingOffset, startingOffset;
						if (reply != null) {
							startingOffset = parseInt(Math.ceil(reply - pageSize / 2));
							if (startingOffset < 0) {
								startingOffset = 0;
							}
							endingOffset = startingOffset + pageSize - 1;
							return _this.redisConnection.zrevrange(
								leaderboardName,
								startingOffset,
								endingOffset,
								function (err, reply) {
									return _this.rankedInListIn(
										leaderboardName,
										reply,
										options,
										callback,
									);
								},
							);
						} else {
							callback([]);
							return [];
						}
					};
				})(this),
			);
		}
	};

	/*
	 * Merge leaderboards given by keys with this leaderboard into a named destination leaderboard.
	 *
	 * @param destination [String] Destination leaderboard name.
	 * @param keys [Array] Leaderboards to be merged with the current leaderboard.
	 * @param options [Hash] Options for merging the leaderboards.
	 * @param callback Callback for result of call.
	 */

	Leaderboard.prototype.mergeLeaderboards = function (
		destination,
		keys,
		options,
		callback,
	) {
		var len;
		if (options == null) {
			options = {
				aggregate: "sum",
			};
		}
		len = keys.length + 1;
		keys.unshift(this.leaderboardName);
		keys.unshift(len);
		keys.unshift(destination);
		keys.push("AGGREGATE");
		keys.push(options["aggregate"]);
		return this.redisConnection.zunionstore(keys, function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Intersect leaderboards given by keys with this leaderboard into a named destination leaderboard.
	 *
	 * @param destination [String] Destination leaderboard name.
	 * @param keys [Array] Leaderboards to be merged with the current leaderboard.
	 * @param options [Hash] Options for intersecting the leaderboards.
	 * @param callback Callback for result of call.
	 */

	Leaderboard.prototype.intersectLeaderboards = function (
		destination,
		keys,
		options,
		callback,
	) {
		var len;
		if (options == null) {
			options = {
				aggregate: "sum",
			};
		}
		len = keys.length + 1;
		keys.unshift(this.leaderboardName);
		keys.unshift(len);
		keys.unshift(destination);
		keys.push("AGGREGATE");
		keys.push(options["aggregate"]);
		return this.redisConnection.zinterstore(keys, function (err, reply) {
			if (callback) {
				return callback(reply);
			}
		});
	};

	/*
	 * Key for retrieving optional member data.
	 *
	 * @param leaderboardName [String] Name of the leaderboard.
	 *
	 * @return a key in the form of +leaderboardName:member_data+
	 */

	Leaderboard.prototype.memberDataKey = function (leaderboardName) {
		return "" + leaderboardName + ":" + this.memberDataNamespace;
	};

	return Leaderboard;
})();

export default Leaderboard as any;
