const data = {
  "/v2/api/documentation": [
    {
      "url": "/v2/api/documentation/",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function: handler]",
      "path": "/v2/api/documentation/",
      "routePath": "/",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/static/theme/theme.css": [
    {
      "url": "/v2/api/documentation/static/theme/theme.css",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function: handler]",
      "path": "/v2/api/documentation/static/theme/theme.css",
      "routePath": "/static/theme/theme.css",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/static/index.html": [
    {
      "url": "/v2/api/documentation/static/index.html",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function: handler]",
      "path": "/v2/api/documentation/static/index.html",
      "routePath": "/static/index.html",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/static/swagger-initializer.js": [
    {
      "url": "/v2/api/documentation/static/swagger-initializer.js",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function: handler]",
      "path": "/v2/api/documentation/static/swagger-initializer.js",
      "routePath": "/static/swagger-initializer.js",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/json": [
    {
      "url": "/v2/api/documentation/json",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function (anonymous)]",
      "path": "/v2/api/documentation/json",
      "routePath": "/json",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/yaml": [
    {
      "url": "/v2/api/documentation/yaml",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function (anonymous)]",
      "path": "/v2/api/documentation/yaml",
      "routePath": "/yaml",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/*": [
    {
      "url": "/v2/api/documentation/*",
      "method": "GET",
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "onRequest": "[Function: onRequest]",
      "preHandler": "[Function: preHandler]",
      "handler": "[Function: handler]",
      "path": "/v2/api/documentation/*",
      "routePath": "/*",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/api/documentation/static/*": [
    {
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "errorHandler": "[Function: errorHandler]",
      "method": "HEAD",
      "url": "/v2/api/documentation/static/*",
      "path": "/v2/api/documentation/static/*",
      "handler": "[Function (anonymous)]",
      "routePath": "/static/*",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    },
    {
      "schema": {
        "hide": true,
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "errorHandler": "[Function: errorHandler]",
      "method": "GET",
      "url": "/v2/api/documentation/static/*",
      "path": "/v2/api/documentation/static/*",
      "handler": "[Function (anonymous)]",
      "routePath": "/static/*",
      "prefix": "/v2/api/documentation",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/auth/states": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "auth"
        ],
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    },
                    "is_active": {
                      "type": "integer"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "is_active"
                  ]
                }
              }
            },
            "required": [
              "status",
              "message"
            ]
          }
        }
      },
      "method": "GET",
      "url": "/v2/auth/states",
      "path": "/v2/auth/states",
      "handler": "[Function (anonymous)]",
      "routePath": "/states",
      "prefix": "/v2/auth",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/auth/status-check": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "auth"
        ],
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    },
                    "is_active": {
                      "type": "integer"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "is_active"
                  ]
                }
              }
            },
            "required": [
              "status",
              "message"
            ]
          }
        }
      },
      "method": "GET",
      "url": "/v2/auth/status-check",
      "path": "/v2/auth/status-check",
      "handler": "[Function (anonymous)]",
      "routePath": "/status-check",
      "prefix": "/v2/auth",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/fixture": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "fixture"
        ],
        "querystring": {
          "type": "object",
          "properties": {
            "page": {
              "type": "number"
            },
            "size": {
              "type": "number"
            }
          }
        },
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    },
                    "competition_id": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "competition_name": {
                      "type": "string"
                    },
                    "inning_number": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "completed_inning_number": {
                      "type": "integer"
                    },
                    "total_innings": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "payment_data": {
                      "type": []
                    },
                    "payment_data_all": {
                      "type": []
                    },
                    "season": {
                      "type": "string"
                    },
                    "teama": {
                      "type": "string"
                    },
                    "teama_id": {
                      "type": "string"
                    },
                    "teama_image": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teama_color": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teama_score": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teama_short_name": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teamb": {
                      "type": "string"
                    },
                    "teamb_id": {
                      "type": "string"
                    },
                    "teamb_image": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teamb_color": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teamb_score": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "teamb_short_name": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "format": {
                      "type": "string"
                    },
                    "format_str": {
                      "type": "string"
                    },
                    "starting_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "ending_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "inning_starting_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "verified": {
                      "type": "integer"
                    },
                    "pre_squad": {
                      "type": "integer"
                    },
                    "is_active": {
                      "type": "integer"
                    },
                    "is_leaderboard": {
                      "type": "integer"
                    },
                    "lineup_announced": {
                      "type": "integer"
                    },
                    "status": {
                      "type": [
                        "string"
                      ],
                      "enum": [
                        "NOT STARTED",
                        "LIVE",
                        "IN REVIEW",
                        "COMPLETED",
                        "CANCELED"
                      ]
                    },
                    "allow_prize_distribution": {
                      "type": "integer"
                    },
                    "cancel_allow": {
                      "type": "integer"
                    },
                    "sequence_by": {
                      "type": "integer"
                    },
                    "admin_time_change": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "is_cancelled": {
                      "type": "integer"
                    },
                    "is_rank_updated": {
                      "type": "integer"
                    },
                    "status_note": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "last_squad_update": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "mega_value": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "mega_prize_img": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "free_value": {
                      "type": "integer"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "contests_count": {
                      "type": "number"
                    },
                    "fixture_reminder": {
                      "type": "boolean"
                    },
                    "series_reminder": {
                      "type": "boolean"
                    },
                    "seconds": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "competition_name",
                    "completed_inning_number",
                    "season",
                    "teama",
                    "teama_id",
                    "teamb",
                    "teamb_id",
                    "format",
                    "format_str",
                    "verified",
                    "pre_squad",
                    "is_active",
                    "is_leaderboard",
                    "lineup_announced",
                    "status",
                    "allow_prize_distribution",
                    "cancel_allow",
                    "sequence_by",
                    "is_cancelled",
                    "is_rank_updated",
                    "free_value"
                  ]
                }
              }
            },
            "required": [
              "status",
              "message"
            ]
          }
        }
      },
      "method": "GET",
      "url": "/v2/fixture/",
      "path": "/v2/fixture/",
      "handler": "[Function (anonymous)]",
      "routePath": "/",
      "prefix": "/v2/fixture",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/fixture/banner": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "fixture"
        ],
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "image": {
                      "type": "string"
                    },
                    "link": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "type": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "is_active": {
                      "type": "integer"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  },
                  "required": [
                    "id",
                    "image",
                    "is_active"
                  ]
                }
              }
            },
            "required": [
              "status",
              "message"
            ]
          }
        }
      },
      "method": "GET",
      "url": "/v2/fixture/banner",
      "path": "/v2/fixture/banner",
      "handler": "[Function (anonymous)]",
      "routePath": "/banner",
      "prefix": "/v2/fixture",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/contest/join-multy": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "contest"
        ],
        "body": {
          "type": "object",
          "properties": {
            "contest_id": {
              "type": "string",
              "_typeCheck": "[Function: check]",
              "_whitelist": {},
              "_blacklist": {},
              "internalTests": {
                "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}",
                "optionality": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'optionality',\n    test: [Function: test]\n  }\n}"
              },
              "exclusiveTests": {
                "required": false
              },
              "deps": [],
              "conditions": [],
              "tests": [
                "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'required',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}"
              ],
              "transforms": [
                "[Function (anonymous)]"
              ],
              "spec": {
                "strip": false,
                "strict": false,
                "abortEarly": true,
                "recursive": true,
                "nullable": false,
                "optional": false,
                "coerce": true
              }
            },
            "user_team_id": {
              "type": "array",
              "_typeCheck": "[Function: check]",
              "_whitelist": {},
              "_blacklist": {},
              "internalTests": {
                "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}",
                "optionality": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'optionality',\n    test: [Function: test]\n  }\n}"
              },
              "exclusiveTests": {},
              "deps": [],
              "conditions": [],
              "tests": [],
              "transforms": [],
              "spec": {
                "strip": false,
                "strict": false,
                "abortEarly": true,
                "recursive": true,
                "nullable": false,
                "optional": false,
                "coerce": true,
                "types": {
                  "type": "string",
                  "deps": [],
                  "tests": [],
                  "transforms": [
                    "[Function (anonymous)]"
                  ],
                  "conditions": [],
                  "internalTests": {
                    "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                    "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} cannot be null',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}"
                  },
                  "_whitelist": {},
                  "_blacklist": {},
                  "exclusiveTests": {},
                  "_typeCheck": "[Function: check]",
                  "spec": {
                    "strip": false,
                    "strict": false,
                    "abortEarly": true,
                    "recursive": true,
                    "nullable": false,
                    "optional": true,
                    "coerce": true
                  }
                }
              },
              "innerType": {
                "type": "string",
                "deps": [],
                "tests": [],
                "transforms": [
                  "[Function (anonymous)]"
                ],
                "conditions": [],
                "internalTests": {
                  "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                  "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} cannot be null',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}"
                },
                "_whitelist": {},
                "_blacklist": {},
                "exclusiveTests": {},
                "_typeCheck": "[Function: check]",
                "spec": {
                  "strip": false,
                  "strict": false,
                  "abortEarly": true,
                  "recursive": true,
                  "nullable": false,
                  "optional": true,
                  "coerce": true
                }
              }
            }
          }
        },
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "method": "POST",
      "url": "/v2/contest/join-multy",
      "path": "/v2/contest/join-multy",
      "handler": "[Function (anonymous)]",
      "routePath": "/join-multy",
      "prefix": "/v2/contest",
      "logLevel": "",
      "attachValidation": false
    }
  ],
  "/v2/contest/join/multi-contest/user": [
    {
      "schema": {
        "security": [
          {
            "Bearer": []
          }
        ],
        "tags": [
          "contest"
        ],
        "body": {
          "type": "object",
          "properties": {
            "contest_id": {
              "type": "string",
              "_typeCheck": "[Function: check]",
              "_whitelist": {},
              "_blacklist": {},
              "internalTests": {
                "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}",
                "optionality": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'optionality',\n    test: [Function: test]\n  }\n}"
              },
              "exclusiveTests": {
                "required": false
              },
              "deps": [],
              "conditions": [],
              "tests": [
                "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'required',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}"
              ],
              "transforms": [
                "[Function (anonymous)]"
              ],
              "spec": {
                "strip": false,
                "strict": false,
                "abortEarly": true,
                "recursive": true,
                "nullable": false,
                "optional": false,
                "coerce": true
              }
            },
            "user_team_id": {
              "type": "string",
              "_typeCheck": "[Function: check]",
              "_whitelist": {},
              "_blacklist": {},
              "internalTests": {
                "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}",
                "optionality": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'optionality',\n    test: [Function: test]\n  }\n}"
              },
              "exclusiveTests": {
                "required": false
              },
              "deps": [],
              "conditions": [],
              "tests": [
                "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'required',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}"
              ],
              "transforms": [
                "[Function (anonymous)]"
              ],
              "spec": {
                "strip": false,
                "strict": false,
                "abortEarly": true,
                "recursive": true,
                "nullable": false,
                "optional": false,
                "coerce": true
              }
            },
            "count": {
              "type": "number",
              "_typeCheck": "[Function: check]",
              "_whitelist": {},
              "_blacklist": {},
              "internalTests": {
                "typeError": "[Function: validate] {\n  OPTIONS: {\n    message: [Function: notType],\n    name: 'typeError',\n    skipAbsent: true,\n    test: [Function: test]\n  }\n}",
                "nullable": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'nullable',\n    test: [Function: test]\n  }\n}",
                "optionality": "[Function: validate] {\n  OPTIONS: {\n    message: '${path} is a required field',\n    name: 'optionality',\n    test: [Function: test]\n  }\n}"
              },
              "exclusiveTests": {},
              "deps": [],
              "conditions": [],
              "tests": [],
              "transforms": [
                "[Function (anonymous)]"
              ],
              "spec": {
                "strip": false,
                "strict": false,
                "abortEarly": true,
                "recursive": true,
                "nullable": false,
                "optional": false,
                "coerce": true
              }
            }
          }
        },
        "response": {
          "200": {
            "type": "object",
            "properties": {
              "status": {
                "type": "boolean"
              },
              "message": {
                "type": "string"
              },
              "data": {
                "type": []
              }
            },
            "required": [
              "status",
              "message",
              "data"
            ]
          }
        }
      },
      "method": "POST",
      "url": "/v2/contest/join/multi-contest/user",
      "path": "/v2/contest/join/multi-contest/user",
      "handler": "[Function (anonymous)]",
      "routePath": "/join/multi-contest/user",
      "prefix": "/v2/contest",
      "logLevel": "",
      "attachValidation": false
    }
  ]
};