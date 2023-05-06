import type { Sequelize } from "sequelize";
import { adhaar as _adhaar } from "./adhaar";
import type { adhaarAttributes, adhaarCreationAttributes } from "./adhaar";
import { admin_pages as _admin_pages } from "./admin_pages";
import type { admin_pagesAttributes, admin_pagesCreationAttributes } from "./admin_pages";
import { admins as _admins } from "./admins";
import type { adminsAttributes, adminsCreationAttributes } from "./admins";
import { bank_accounts as _bank_accounts } from "./bank_accounts";
import type { bank_accountsAttributes, bank_accountsCreationAttributes } from "./bank_accounts";
import { banners as _banners } from "./banners";
import type { bannersAttributes, bannersCreationAttributes } from "./banners";
import { bkb_competitions as _bkb_competitions } from "./bkb_competitions";
import type { bkb_competitionsAttributes, bkb_competitionsCreationAttributes } from "./bkb_competitions";
import { bkb_contests as _bkb_contests } from "./bkb_contests";
import type { bkb_contestsAttributes, bkb_contestsCreationAttributes } from "./bkb_contests";
import { bkb_fantasy_points as _bkb_fantasy_points } from "./bkb_fantasy_points";
import type { bkb_fantasy_pointsAttributes, bkb_fantasy_pointsCreationAttributes } from "./bkb_fantasy_points";
import { bkb_fixtures as _bkb_fixtures } from "./bkb_fixtures";
import type { bkb_fixturesAttributes, bkb_fixturesCreationAttributes } from "./bkb_fixtures";
import { bkb_players as _bkb_players } from "./bkb_players";
import type { bkb_playersAttributes, bkb_playersCreationAttributes } from "./bkb_players";
import { bkb_private_contests as _bkb_private_contests } from "./bkb_private_contests";
import type { bkb_private_contestsAttributes, bkb_private_contestsCreationAttributes } from "./bkb_private_contests";
import { bkb_squads as _bkb_squads } from "./bkb_squads";
import type { bkb_squadsAttributes, bkb_squadsCreationAttributes } from "./bkb_squads";
import { bkb_user_contests as _bkb_user_contests } from "./bkb_user_contests";
import type { bkb_user_contestsAttributes, bkb_user_contestsCreationAttributes } from "./bkb_user_contests";
import { bkb_user_private_contests as _bkb_user_private_contests } from "./bkb_user_private_contests";
import type { bkb_user_private_contestsAttributes, bkb_user_private_contestsCreationAttributes } from "./bkb_user_private_contests";
import { bkb_user_teams as _bkb_user_teams } from "./bkb_user_teams";
import type { bkb_user_teamsAttributes, bkb_user_teamsCreationAttributes } from "./bkb_user_teams";
import { blog_categories as _blog_categories } from "./blog_categories";
import type { blog_categoriesAttributes, blog_categoriesCreationAttributes } from "./blog_categories";
import { blogs as _blogs } from "./blogs";
import type { blogsAttributes, blogsCreationAttributes } from "./blogs";
import { bsb_competitions as _bsb_competitions } from "./bsb_competitions";
import type { bsb_competitionsAttributes, bsb_competitionsCreationAttributes } from "./bsb_competitions";
import { bsb_contests as _bsb_contests } from "./bsb_contests";
import type { bsb_contestsAttributes, bsb_contestsCreationAttributes } from "./bsb_contests";
import { bsb_fantasy_point_categories as _bsb_fantasy_point_categories } from "./bsb_fantasy_point_categories";
import type { bsb_fantasy_point_categoriesAttributes, bsb_fantasy_point_categoriesCreationAttributes } from "./bsb_fantasy_point_categories";
import { bsb_fantasy_points as _bsb_fantasy_points } from "./bsb_fantasy_points";
import type { bsb_fantasy_pointsAttributes, bsb_fantasy_pointsCreationAttributes } from "./bsb_fantasy_points";
import { bsb_fixtures as _bsb_fixtures } from "./bsb_fixtures";
import type { bsb_fixturesAttributes, bsb_fixturesCreationAttributes } from "./bsb_fixtures";
import { bsb_players as _bsb_players } from "./bsb_players";
import type { bsb_playersAttributes, bsb_playersCreationAttributes } from "./bsb_players";
import { bsb_private_contests as _bsb_private_contests } from "./bsb_private_contests";
import type { bsb_private_contestsAttributes, bsb_private_contestsCreationAttributes } from "./bsb_private_contests";
import { bsb_squads as _bsb_squads } from "./bsb_squads";
import type { bsb_squadsAttributes, bsb_squadsCreationAttributes } from "./bsb_squads";
import { bsb_user_contests as _bsb_user_contests } from "./bsb_user_contests";
import type { bsb_user_contestsAttributes, bsb_user_contestsCreationAttributes } from "./bsb_user_contests";
import { bsb_user_private_contests as _bsb_user_private_contests } from "./bsb_user_private_contests";
import type { bsb_user_private_contestsAttributes, bsb_user_private_contestsCreationAttributes } from "./bsb_user_private_contests";
import { bsb_user_teams as _bsb_user_teams } from "./bsb_user_teams";
import type { bsb_user_teamsAttributes, bsb_user_teamsCreationAttributes } from "./bsb_user_teams";
import { competitions as _competitions } from "./competitions";
import type { competitionsAttributes, competitionsCreationAttributes } from "./competitions";
import { contest_categories as _contest_categories } from "./contest_categories";
import type { contest_categoriesAttributes, contest_categoriesCreationAttributes } from "./contest_categories";
import { contest_templates as _contest_templates } from "./contest_templates";
import type { contest_templatesAttributes, contest_templatesCreationAttributes } from "./contest_templates";
import { contests as _contests } from "./contests";
import type { contestsAttributes, contestsCreationAttributes } from "./contests";
import { copy_leaderboards as _copy_leaderboards } from "./copy_leaderboards";
import type { copy_leaderboardsAttributes, copy_leaderboardsCreationAttributes } from "./copy_leaderboards";
import { coupons as _coupons } from "./coupons";
import type { couponsAttributes, couponsCreationAttributes } from "./coupons";
import { failed_jobs as _failed_jobs } from "./failed_jobs";
import type { failed_jobsAttributes, failed_jobsCreationAttributes } from "./failed_jobs";
import { fantasy_point_categories as _fantasy_point_categories } from "./fantasy_point_categories";
import type { fantasy_point_categoriesAttributes, fantasy_point_categoriesCreationAttributes } from "./fantasy_point_categories";
import { fantasy_points as _fantasy_points } from "./fantasy_points";
import type { fantasy_pointsAttributes, fantasy_pointsCreationAttributes } from "./fantasy_points";
import { faqs as _faqs } from "./faqs";
import type { faqsAttributes, faqsCreationAttributes } from "./faqs";
import { fixtures as _fixtures } from "./fixtures";
import type { fixturesAttributes, fixturesCreationAttributes } from "./fixtures";
import { ftb_competitions as _ftb_competitions } from "./ftb_competitions";
import type { ftb_competitionsAttributes, ftb_competitionsCreationAttributes } from "./ftb_competitions";
import { ftb_contests as _ftb_contests } from "./ftb_contests";
import type { ftb_contestsAttributes, ftb_contestsCreationAttributes } from "./ftb_contests";
import { ftb_fantasy_point_categories as _ftb_fantasy_point_categories } from "./ftb_fantasy_point_categories";
import type { ftb_fantasy_point_categoriesAttributes, ftb_fantasy_point_categoriesCreationAttributes } from "./ftb_fantasy_point_categories";
import { ftb_fantasy_points as _ftb_fantasy_points } from "./ftb_fantasy_points";
import type { ftb_fantasy_pointsAttributes, ftb_fantasy_pointsCreationAttributes } from "./ftb_fantasy_points";
import { ftb_fixtures as _ftb_fixtures } from "./ftb_fixtures";
import type { ftb_fixturesAttributes, ftb_fixturesCreationAttributes } from "./ftb_fixtures";
import { ftb_leaderboards as _ftb_leaderboards } from "./ftb_leaderboards";
import type { ftb_leaderboardsAttributes, ftb_leaderboardsCreationAttributes } from "./ftb_leaderboards";
import { ftb_players as _ftb_players } from "./ftb_players";
import type { ftb_playersAttributes, ftb_playersCreationAttributes } from "./ftb_players";
import { ftb_private_contests as _ftb_private_contests } from "./ftb_private_contests";
import type { ftb_private_contestsAttributes, ftb_private_contestsCreationAttributes } from "./ftb_private_contests";
import { ftb_squads as _ftb_squads } from "./ftb_squads";
import type { ftb_squadsAttributes, ftb_squadsCreationAttributes } from "./ftb_squads";
import { ftb_user_contests as _ftb_user_contests } from "./ftb_user_contests";
import type { ftb_user_contestsAttributes, ftb_user_contestsCreationAttributes } from "./ftb_user_contests";
import { ftb_user_private_contests as _ftb_user_private_contests } from "./ftb_user_private_contests";
import type { ftb_user_private_contestsAttributes, ftb_user_private_contestsCreationAttributes } from "./ftb_user_private_contests";
import { ftb_user_teams as _ftb_user_teams } from "./ftb_user_teams";
import type { ftb_user_teamsAttributes, ftb_user_teamsCreationAttributes } from "./ftb_user_teams";
import { hky_competitions as _hky_competitions } from "./hky_competitions";
import type { hky_competitionsAttributes, hky_competitionsCreationAttributes } from "./hky_competitions";
import { hky_contests as _hky_contests } from "./hky_contests";
import type { hky_contestsAttributes, hky_contestsCreationAttributes } from "./hky_contests";
import { hky_fantasy_point_categories as _hky_fantasy_point_categories } from "./hky_fantasy_point_categories";
import type { hky_fantasy_point_categoriesAttributes, hky_fantasy_point_categoriesCreationAttributes } from "./hky_fantasy_point_categories";
import { hky_fantasy_points as _hky_fantasy_points } from "./hky_fantasy_points";
import type { hky_fantasy_pointsAttributes, hky_fantasy_pointsCreationAttributes } from "./hky_fantasy_points";
import { hky_fixtures as _hky_fixtures } from "./hky_fixtures";
import type { hky_fixturesAttributes, hky_fixturesCreationAttributes } from "./hky_fixtures";
import { hky_players as _hky_players } from "./hky_players";
import type { hky_playersAttributes, hky_playersCreationAttributes } from "./hky_players";
import { hky_private_contests as _hky_private_contests } from "./hky_private_contests";
import type { hky_private_contestsAttributes, hky_private_contestsCreationAttributes } from "./hky_private_contests";
import { hky_squads as _hky_squads } from "./hky_squads";
import type { hky_squadsAttributes, hky_squadsCreationAttributes } from "./hky_squads";
import { hky_user_contests as _hky_user_contests } from "./hky_user_contests";
import type { hky_user_contestsAttributes, hky_user_contestsCreationAttributes } from "./hky_user_contests";
import { hky_user_private_contests as _hky_user_private_contests } from "./hky_user_private_contests";
import type { hky_user_private_contestsAttributes, hky_user_private_contestsCreationAttributes } from "./hky_user_private_contests";
import { hky_user_teams as _hky_user_teams } from "./hky_user_teams";
import type { hky_user_teamsAttributes, hky_user_teamsCreationAttributes } from "./hky_user_teams";
import { influncer_export_data as _influncer_export_data } from "./influncer_export_data";
import type { influncer_export_dataAttributes, influncer_export_dataCreationAttributes } from "./influncer_export_data";
import { investment_leaderboard as _investment_leaderboard } from "./investment_leaderboard";
import type { investment_leaderboardAttributes, investment_leaderboardCreationAttributes } from "./investment_leaderboard";
import { investment_leaderboards as _investment_leaderboards } from "./investment_leaderboards";
import type { investment_leaderboardsAttributes, investment_leaderboardsCreationAttributes } from "./investment_leaderboards";
import { jobs as _jobs } from "./jobs";
import type { jobsAttributes, jobsCreationAttributes } from "./jobs";
import { kbd_competitions as _kbd_competitions } from "./kbd_competitions";
import type { kbd_competitionsAttributes, kbd_competitionsCreationAttributes } from "./kbd_competitions";
import { kbd_contests as _kbd_contests } from "./kbd_contests";
import type { kbd_contestsAttributes, kbd_contestsCreationAttributes } from "./kbd_contests";
import { kbd_fantasy_point_categories as _kbd_fantasy_point_categories } from "./kbd_fantasy_point_categories";
import type { kbd_fantasy_point_categoriesAttributes, kbd_fantasy_point_categoriesCreationAttributes } from "./kbd_fantasy_point_categories";
import { kbd_fantasy_points as _kbd_fantasy_points } from "./kbd_fantasy_points";
import type { kbd_fantasy_pointsAttributes, kbd_fantasy_pointsCreationAttributes } from "./kbd_fantasy_points";
import { kbd_fixtures as _kbd_fixtures } from "./kbd_fixtures";
import type { kbd_fixturesAttributes, kbd_fixturesCreationAttributes } from "./kbd_fixtures";
import { kbd_leaderboards as _kbd_leaderboards } from "./kbd_leaderboards";
import type { kbd_leaderboardsAttributes, kbd_leaderboardsCreationAttributes } from "./kbd_leaderboards";
import { kbd_players as _kbd_players } from "./kbd_players";
import type { kbd_playersAttributes, kbd_playersCreationAttributes } from "./kbd_players";
import { kbd_private_contests as _kbd_private_contests } from "./kbd_private_contests";
import type { kbd_private_contestsAttributes, kbd_private_contestsCreationAttributes } from "./kbd_private_contests";
import { kbd_squads as _kbd_squads } from "./kbd_squads";
import type { kbd_squadsAttributes, kbd_squadsCreationAttributes } from "./kbd_squads";
import { kbd_user_contests as _kbd_user_contests } from "./kbd_user_contests";
import type { kbd_user_contestsAttributes, kbd_user_contestsCreationAttributes } from "./kbd_user_contests";
import { kbd_user_private_contests as _kbd_user_private_contests } from "./kbd_user_private_contests";
import type { kbd_user_private_contestsAttributes, kbd_user_private_contestsCreationAttributes } from "./kbd_user_private_contests";
import { kbd_user_teams as _kbd_user_teams } from "./kbd_user_teams";
import type { kbd_user_teamsAttributes, kbd_user_teamsCreationAttributes } from "./kbd_user_teams";
import { leaderboard_influencer as _leaderboard_influencer } from "./leaderboard_influencer";
import type { leaderboard_influencerAttributes, leaderboard_influencerCreationAttributes } from "./leaderboard_influencer";
import { leaderboard_week_details as _leaderboard_week_details } from "./leaderboard_week_details";
import type { leaderboard_week_detailsAttributes, leaderboard_week_detailsCreationAttributes } from "./leaderboard_week_details";
import { leaderboard_weeks as _leaderboard_weeks } from "./leaderboard_weeks";
import type { leaderboard_weeksAttributes, leaderboard_weeksCreationAttributes } from "./leaderboard_weeks";
import { leaderboards as _leaderboards } from "./leaderboards";
import type { leaderboardsAttributes, leaderboardsCreationAttributes } from "./leaderboards";
import { logs as _logs } from "./logs";
import type { logsAttributes, logsCreationAttributes } from "./logs";
import { migrations as _migrations } from "./migrations";
import type { migrationsAttributes, migrationsCreationAttributes } from "./migrations";
import { new_demop as _new_demop } from "./new_demop";
import type { new_demopAttributes, new_demopCreationAttributes } from "./new_demop";
import { notifications as _notifications } from "./notifications";
import type { notificationsAttributes, notificationsCreationAttributes } from "./notifications";
import { pages as _pages } from "./pages";
import type { pagesAttributes, pagesCreationAttributes } from "./pages";
import { pan_cards as _pan_cards } from "./pan_cards";
import type { pan_cardsAttributes, pan_cardsCreationAttributes } from "./pan_cards";
import { password_resets as _password_resets } from "./password_resets";
import type { password_resetsAttributes, password_resetsCreationAttributes } from "./password_resets";
import { payment_history as _payment_history } from "./payment_history";
import type { payment_historyAttributes, payment_historyCreationAttributes } from "./payment_history";
import { payments as _payments } from "./payments";
import type { paymentsAttributes, paymentsCreationAttributes } from "./payments";
import { payments_copy2 as _payments_copy2 } from "./payments_copy2";
import type { payments_copy2Attributes, payments_copy2CreationAttributes } from "./payments_copy2";
import { payments_till_august as _payments_till_august } from "./payments_till_august";
import type { payments_till_augustAttributes, payments_till_augustCreationAttributes } from "./payments_till_august";
import { personal_access_tokens as _personal_access_tokens } from "./personal_access_tokens";
import type { personal_access_tokensAttributes, personal_access_tokensCreationAttributes } from "./personal_access_tokens";
import { players as _players } from "./players";
import type { playersAttributes, playersCreationAttributes } from "./players";
import { private_contests as _private_contests } from "./private_contests";
import type { private_contestsAttributes, private_contestsCreationAttributes } from "./private_contests";
import { rank_categories as _rank_categories } from "./rank_categories";
import type { rank_categoriesAttributes, rank_categoriesCreationAttributes } from "./rank_categories";
import { ranks as _ranks } from "./ranks";
import type { ranksAttributes, ranksCreationAttributes } from "./ranks";
import { referal_amount_details as _referal_amount_details } from "./referal_amount_details";
import type { referal_amount_detailsAttributes, referal_amount_detailsCreationAttributes } from "./referal_amount_details";
import { referal_deposit_details as _referal_deposit_details } from "./referal_deposit_details";
import type { referal_deposit_detailsAttributes, referal_deposit_detailsCreationAttributes } from "./referal_deposit_details";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { settings as _settings } from "./settings";
import type { settingsAttributes, settingsCreationAttributes } from "./settings";
import { squads as _squads } from "./squads";
import type { squadsAttributes, squadsCreationAttributes } from "./squads";
import { states as _states } from "./states";
import type { statesAttributes, statesCreationAttributes } from "./states";
import { tds as _tds } from "./tds";
import type { tdsAttributes, tdsCreationAttributes } from "./tds";
import { user_contests as _user_contests } from "./user_contests";
import type { user_contestsAttributes, user_contestsCreationAttributes } from "./user_contests";
import { user_contests_copy1 as _user_contests_copy1 } from "./user_contests_copy1";
import type { user_contests_copy1Attributes, user_contests_copy1CreationAttributes } from "./user_contests_copy1";
import { user_private_contests as _user_private_contests } from "./user_private_contests";
import type { user_private_contestsAttributes, user_private_contestsCreationAttributes } from "./user_private_contests";
import { user_tds_info as _user_tds_info } from "./user_tds_info";
import type { user_tds_infoAttributes, user_tds_infoCreationAttributes } from "./user_tds_info";
import { user_teams as _user_teams } from "./user_teams";
import type { user_teamsAttributes, user_teamsCreationAttributes } from "./user_teams";
import { user_teams_copy1 as _user_teams_copy1 } from "./user_teams_copy1";
import type { user_teams_copy1Attributes, user_teams_copy1CreationAttributes } from "./user_teams_copy1";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { xx_extra as _xx_extra } from "./xx_extra";
import type { xx_extraAttributes, xx_extraCreationAttributes } from "./xx_extra";

export {
  _adhaar as adhaar,
  _admin_pages as admin_pages,
  _admins as admins,
  _bank_accounts as bank_accounts,
  _banners as banners,
  _bkb_competitions as bkb_competitions,
  _bkb_contests as bkb_contests,
  _bkb_fantasy_points as bkb_fantasy_points,
  _bkb_fixtures as bkb_fixtures,
  _bkb_players as bkb_players,
  _bkb_private_contests as bkb_private_contests,
  _bkb_squads as bkb_squads,
  _bkb_user_contests as bkb_user_contests,
  _bkb_user_private_contests as bkb_user_private_contests,
  _bkb_user_teams as bkb_user_teams,
  _blog_categories as blog_categories,
  _blogs as blogs,
  _bsb_competitions as bsb_competitions,
  _bsb_contests as bsb_contests,
  _bsb_fantasy_point_categories as bsb_fantasy_point_categories,
  _bsb_fantasy_points as bsb_fantasy_points,
  _bsb_fixtures as bsb_fixtures,
  _bsb_players as bsb_players,
  _bsb_private_contests as bsb_private_contests,
  _bsb_squads as bsb_squads,
  _bsb_user_contests as bsb_user_contests,
  _bsb_user_private_contests as bsb_user_private_contests,
  _bsb_user_teams as bsb_user_teams,
  _competitions as competitions,
  _contest_categories as contest_categories,
  _contest_templates as contest_templates,
  _contests as contests,
  _copy_leaderboards as copy_leaderboards,
  _coupons as coupons,
  _failed_jobs as failed_jobs,
  _fantasy_point_categories as fantasy_point_categories,
  _fantasy_points as fantasy_points,
  _faqs as faqs,
  _fixtures as fixtures,
  _ftb_competitions as ftb_competitions,
  _ftb_contests as ftb_contests,
  _ftb_fantasy_point_categories as ftb_fantasy_point_categories,
  _ftb_fantasy_points as ftb_fantasy_points,
  _ftb_fixtures as ftb_fixtures,
  _ftb_leaderboards as ftb_leaderboards,
  _ftb_players as ftb_players,
  _ftb_private_contests as ftb_private_contests,
  _ftb_squads as ftb_squads,
  _ftb_user_contests as ftb_user_contests,
  _ftb_user_private_contests as ftb_user_private_contests,
  _ftb_user_teams as ftb_user_teams,
  _hky_competitions as hky_competitions,
  _hky_contests as hky_contests,
  _hky_fantasy_point_categories as hky_fantasy_point_categories,
  _hky_fantasy_points as hky_fantasy_points,
  _hky_fixtures as hky_fixtures,
  _hky_players as hky_players,
  _hky_private_contests as hky_private_contests,
  _hky_squads as hky_squads,
  _hky_user_contests as hky_user_contests,
  _hky_user_private_contests as hky_user_private_contests,
  _hky_user_teams as hky_user_teams,
  _influncer_export_data as influncer_export_data,
  _investment_leaderboard as investment_leaderboard,
  _investment_leaderboards as investment_leaderboards,
  _jobs as jobs,
  _kbd_competitions as kbd_competitions,
  _kbd_contests as kbd_contests,
  _kbd_fantasy_point_categories as kbd_fantasy_point_categories,
  _kbd_fantasy_points as kbd_fantasy_points,
  _kbd_fixtures as kbd_fixtures,
  _kbd_leaderboards as kbd_leaderboards,
  _kbd_players as kbd_players,
  _kbd_private_contests as kbd_private_contests,
  _kbd_squads as kbd_squads,
  _kbd_user_contests as kbd_user_contests,
  _kbd_user_private_contests as kbd_user_private_contests,
  _kbd_user_teams as kbd_user_teams,
  _leaderboard_influencer as leaderboard_influencer,
  _leaderboard_week_details as leaderboard_week_details,
  _leaderboard_weeks as leaderboard_weeks,
  _leaderboards as leaderboards,
  _logs as logs,
  _migrations as migrations,
  _new_demop as new_demop,
  _notifications as notifications,
  _pages as pages,
  _pan_cards as pan_cards,
  _password_resets as password_resets,
  _payment_history as payment_history,
  _payments as payments,
  _payments_copy2 as payments_copy2,
  _payments_till_august as payments_till_august,
  _personal_access_tokens as personal_access_tokens,
  _players as players,
  _private_contests as private_contests,
  _rank_categories as rank_categories,
  _ranks as ranks,
  _referal_amount_details as referal_amount_details,
  _referal_deposit_details as referal_deposit_details,
  _roles as roles,
  _settings as settings,
  _squads as squads,
  _states as states,
  _tds as tds,
  _user_contests as user_contests,
  _user_contests_copy1 as user_contests_copy1,
  _user_private_contests as user_private_contests,
  _user_tds_info as user_tds_info,
  _user_teams as user_teams,
  _user_teams_copy1 as user_teams_copy1,
  _users as users,
  _xx_extra as xx_extra,
};

export type {
  adhaarAttributes,
  adhaarCreationAttributes,
  admin_pagesAttributes,
  admin_pagesCreationAttributes,
  adminsAttributes,
  adminsCreationAttributes,
  bank_accountsAttributes,
  bank_accountsCreationAttributes,
  bannersAttributes,
  bannersCreationAttributes,
  bkb_competitionsAttributes,
  bkb_competitionsCreationAttributes,
  bkb_contestsAttributes,
  bkb_contestsCreationAttributes,
  bkb_fantasy_pointsAttributes,
  bkb_fantasy_pointsCreationAttributes,
  bkb_fixturesAttributes,
  bkb_fixturesCreationAttributes,
  bkb_playersAttributes,
  bkb_playersCreationAttributes,
  bkb_private_contestsAttributes,
  bkb_private_contestsCreationAttributes,
  bkb_squadsAttributes,
  bkb_squadsCreationAttributes,
  bkb_user_contestsAttributes,
  bkb_user_contestsCreationAttributes,
  bkb_user_private_contestsAttributes,
  bkb_user_private_contestsCreationAttributes,
  bkb_user_teamsAttributes,
  bkb_user_teamsCreationAttributes,
  blog_categoriesAttributes,
  blog_categoriesCreationAttributes,
  blogsAttributes,
  blogsCreationAttributes,
  bsb_competitionsAttributes,
  bsb_competitionsCreationAttributes,
  bsb_contestsAttributes,
  bsb_contestsCreationAttributes,
  bsb_fantasy_point_categoriesAttributes,
  bsb_fantasy_point_categoriesCreationAttributes,
  bsb_fantasy_pointsAttributes,
  bsb_fantasy_pointsCreationAttributes,
  bsb_fixturesAttributes,
  bsb_fixturesCreationAttributes,
  bsb_playersAttributes,
  bsb_playersCreationAttributes,
  bsb_private_contestsAttributes,
  bsb_private_contestsCreationAttributes,
  bsb_squadsAttributes,
  bsb_squadsCreationAttributes,
  bsb_user_contestsAttributes,
  bsb_user_contestsCreationAttributes,
  bsb_user_private_contestsAttributes,
  bsb_user_private_contestsCreationAttributes,
  bsb_user_teamsAttributes,
  bsb_user_teamsCreationAttributes,
  competitionsAttributes,
  competitionsCreationAttributes,
  contest_categoriesAttributes,
  contest_categoriesCreationAttributes,
  contest_templatesAttributes,
  contest_templatesCreationAttributes,
  contestsAttributes,
  contestsCreationAttributes,
  copy_leaderboardsAttributes,
  copy_leaderboardsCreationAttributes,
  couponsAttributes,
  couponsCreationAttributes,
  failed_jobsAttributes,
  failed_jobsCreationAttributes,
  fantasy_point_categoriesAttributes,
  fantasy_point_categoriesCreationAttributes,
  fantasy_pointsAttributes,
  fantasy_pointsCreationAttributes,
  faqsAttributes,
  faqsCreationAttributes,
  fixturesAttributes,
  fixturesCreationAttributes,
  ftb_competitionsAttributes,
  ftb_competitionsCreationAttributes,
  ftb_contestsAttributes,
  ftb_contestsCreationAttributes,
  ftb_fantasy_point_categoriesAttributes,
  ftb_fantasy_point_categoriesCreationAttributes,
  ftb_fantasy_pointsAttributes,
  ftb_fantasy_pointsCreationAttributes,
  ftb_fixturesAttributes,
  ftb_fixturesCreationAttributes,
  ftb_leaderboardsAttributes,
  ftb_leaderboardsCreationAttributes,
  ftb_playersAttributes,
  ftb_playersCreationAttributes,
  ftb_private_contestsAttributes,
  ftb_private_contestsCreationAttributes,
  ftb_squadsAttributes,
  ftb_squadsCreationAttributes,
  ftb_user_contestsAttributes,
  ftb_user_contestsCreationAttributes,
  ftb_user_private_contestsAttributes,
  ftb_user_private_contestsCreationAttributes,
  ftb_user_teamsAttributes,
  ftb_user_teamsCreationAttributes,
  hky_competitionsAttributes,
  hky_competitionsCreationAttributes,
  hky_contestsAttributes,
  hky_contestsCreationAttributes,
  hky_fantasy_point_categoriesAttributes,
  hky_fantasy_point_categoriesCreationAttributes,
  hky_fantasy_pointsAttributes,
  hky_fantasy_pointsCreationAttributes,
  hky_fixturesAttributes,
  hky_fixturesCreationAttributes,
  hky_playersAttributes,
  hky_playersCreationAttributes,
  hky_private_contestsAttributes,
  hky_private_contestsCreationAttributes,
  hky_squadsAttributes,
  hky_squadsCreationAttributes,
  hky_user_contestsAttributes,
  hky_user_contestsCreationAttributes,
  hky_user_private_contestsAttributes,
  hky_user_private_contestsCreationAttributes,
  hky_user_teamsAttributes,
  hky_user_teamsCreationAttributes,
  influncer_export_dataAttributes,
  influncer_export_dataCreationAttributes,
  investment_leaderboardAttributes,
  investment_leaderboardCreationAttributes,
  investment_leaderboardsAttributes,
  investment_leaderboardsCreationAttributes,
  jobsAttributes,
  jobsCreationAttributes,
  kbd_competitionsAttributes,
  kbd_competitionsCreationAttributes,
  kbd_contestsAttributes,
  kbd_contestsCreationAttributes,
  kbd_fantasy_point_categoriesAttributes,
  kbd_fantasy_point_categoriesCreationAttributes,
  kbd_fantasy_pointsAttributes,
  kbd_fantasy_pointsCreationAttributes,
  kbd_fixturesAttributes,
  kbd_fixturesCreationAttributes,
  kbd_leaderboardsAttributes,
  kbd_leaderboardsCreationAttributes,
  kbd_playersAttributes,
  kbd_playersCreationAttributes,
  kbd_private_contestsAttributes,
  kbd_private_contestsCreationAttributes,
  kbd_squadsAttributes,
  kbd_squadsCreationAttributes,
  kbd_user_contestsAttributes,
  kbd_user_contestsCreationAttributes,
  kbd_user_private_contestsAttributes,
  kbd_user_private_contestsCreationAttributes,
  kbd_user_teamsAttributes,
  kbd_user_teamsCreationAttributes,
  leaderboard_influencerAttributes,
  leaderboard_influencerCreationAttributes,
  leaderboard_week_detailsAttributes,
  leaderboard_week_detailsCreationAttributes,
  leaderboard_weeksAttributes,
  leaderboard_weeksCreationAttributes,
  leaderboardsAttributes,
  leaderboardsCreationAttributes,
  logsAttributes,
  logsCreationAttributes,
  migrationsAttributes,
  migrationsCreationAttributes,
  new_demopAttributes,
  new_demopCreationAttributes,
  notificationsAttributes,
  notificationsCreationAttributes,
  pagesAttributes,
  pagesCreationAttributes,
  pan_cardsAttributes,
  pan_cardsCreationAttributes,
  password_resetsAttributes,
  password_resetsCreationAttributes,
  payment_historyAttributes,
  payment_historyCreationAttributes,
  paymentsAttributes,
  paymentsCreationAttributes,
  payments_copy2Attributes,
  payments_copy2CreationAttributes,
  payments_till_augustAttributes,
  payments_till_augustCreationAttributes,
  personal_access_tokensAttributes,
  personal_access_tokensCreationAttributes,
  playersAttributes,
  playersCreationAttributes,
  private_contestsAttributes,
  private_contestsCreationAttributes,
  rank_categoriesAttributes,
  rank_categoriesCreationAttributes,
  ranksAttributes,
  ranksCreationAttributes,
  referal_amount_detailsAttributes,
  referal_amount_detailsCreationAttributes,
  referal_deposit_detailsAttributes,
  referal_deposit_detailsCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  settingsAttributes,
  settingsCreationAttributes,
  squadsAttributes,
  squadsCreationAttributes,
  statesAttributes,
  statesCreationAttributes,
  tdsAttributes,
  tdsCreationAttributes,
  user_contestsAttributes,
  user_contestsCreationAttributes,
  user_contests_copy1Attributes,
  user_contests_copy1CreationAttributes,
  user_private_contestsAttributes,
  user_private_contestsCreationAttributes,
  user_tds_infoAttributes,
  user_tds_infoCreationAttributes,
  user_teamsAttributes,
  user_teamsCreationAttributes,
  user_teams_copy1Attributes,
  user_teams_copy1CreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  xx_extraAttributes,
  xx_extraCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const adhaar = _adhaar.initModel(sequelize);
  const admin_pages = _admin_pages.initModel(sequelize);
  const admins = _admins.initModel(sequelize);
  const bank_accounts = _bank_accounts.initModel(sequelize);
  const banners = _banners.initModel(sequelize);
  const bkb_competitions = _bkb_competitions.initModel(sequelize);
  const bkb_contests = _bkb_contests.initModel(sequelize);
  const bkb_fantasy_points = _bkb_fantasy_points.initModel(sequelize);
  const bkb_fixtures = _bkb_fixtures.initModel(sequelize);
  const bkb_players = _bkb_players.initModel(sequelize);
  const bkb_private_contests = _bkb_private_contests.initModel(sequelize);
  const bkb_squads = _bkb_squads.initModel(sequelize);
  const bkb_user_contests = _bkb_user_contests.initModel(sequelize);
  const bkb_user_private_contests = _bkb_user_private_contests.initModel(sequelize);
  const bkb_user_teams = _bkb_user_teams.initModel(sequelize);
  const blog_categories = _blog_categories.initModel(sequelize);
  const blogs = _blogs.initModel(sequelize);
  const bsb_competitions = _bsb_competitions.initModel(sequelize);
  const bsb_contests = _bsb_contests.initModel(sequelize);
  const bsb_fantasy_point_categories = _bsb_fantasy_point_categories.initModel(sequelize);
  const bsb_fantasy_points = _bsb_fantasy_points.initModel(sequelize);
  const bsb_fixtures = _bsb_fixtures.initModel(sequelize);
  const bsb_players = _bsb_players.initModel(sequelize);
  const bsb_private_contests = _bsb_private_contests.initModel(sequelize);
  const bsb_squads = _bsb_squads.initModel(sequelize);
  const bsb_user_contests = _bsb_user_contests.initModel(sequelize);
  const bsb_user_private_contests = _bsb_user_private_contests.initModel(sequelize);
  const bsb_user_teams = _bsb_user_teams.initModel(sequelize);
  const competitions = _competitions.initModel(sequelize);
  const contest_categories = _contest_categories.initModel(sequelize);
  const contest_templates = _contest_templates.initModel(sequelize);
  const contests = _contests.initModel(sequelize);
  const copy_leaderboards = _copy_leaderboards.initModel(sequelize);
  const coupons = _coupons.initModel(sequelize);
  const failed_jobs = _failed_jobs.initModel(sequelize);
  const fantasy_point_categories = _fantasy_point_categories.initModel(sequelize);
  const fantasy_points = _fantasy_points.initModel(sequelize);
  const faqs = _faqs.initModel(sequelize);
  const fixtures = _fixtures.initModel(sequelize);
  const ftb_competitions = _ftb_competitions.initModel(sequelize);
  const ftb_contests = _ftb_contests.initModel(sequelize);
  const ftb_fantasy_point_categories = _ftb_fantasy_point_categories.initModel(sequelize);
  const ftb_fantasy_points = _ftb_fantasy_points.initModel(sequelize);
  const ftb_fixtures = _ftb_fixtures.initModel(sequelize);
  const ftb_leaderboards = _ftb_leaderboards.initModel(sequelize);
  const ftb_players = _ftb_players.initModel(sequelize);
  const ftb_private_contests = _ftb_private_contests.initModel(sequelize);
  const ftb_squads = _ftb_squads.initModel(sequelize);
  const ftb_user_contests = _ftb_user_contests.initModel(sequelize);
  const ftb_user_private_contests = _ftb_user_private_contests.initModel(sequelize);
  const ftb_user_teams = _ftb_user_teams.initModel(sequelize);
  const hky_competitions = _hky_competitions.initModel(sequelize);
  const hky_contests = _hky_contests.initModel(sequelize);
  const hky_fantasy_point_categories = _hky_fantasy_point_categories.initModel(sequelize);
  const hky_fantasy_points = _hky_fantasy_points.initModel(sequelize);
  const hky_fixtures = _hky_fixtures.initModel(sequelize);
  const hky_players = _hky_players.initModel(sequelize);
  const hky_private_contests = _hky_private_contests.initModel(sequelize);
  const hky_squads = _hky_squads.initModel(sequelize);
  const hky_user_contests = _hky_user_contests.initModel(sequelize);
  const hky_user_private_contests = _hky_user_private_contests.initModel(sequelize);
  const hky_user_teams = _hky_user_teams.initModel(sequelize);
  const influncer_export_data = _influncer_export_data.initModel(sequelize);
  const investment_leaderboard = _investment_leaderboard.initModel(sequelize);
  const investment_leaderboards = _investment_leaderboards.initModel(sequelize);
  const jobs = _jobs.initModel(sequelize);
  const kbd_competitions = _kbd_competitions.initModel(sequelize);
  const kbd_contests = _kbd_contests.initModel(sequelize);
  const kbd_fantasy_point_categories = _kbd_fantasy_point_categories.initModel(sequelize);
  const kbd_fantasy_points = _kbd_fantasy_points.initModel(sequelize);
  const kbd_fixtures = _kbd_fixtures.initModel(sequelize);
  const kbd_leaderboards = _kbd_leaderboards.initModel(sequelize);
  const kbd_players = _kbd_players.initModel(sequelize);
  const kbd_private_contests = _kbd_private_contests.initModel(sequelize);
  const kbd_squads = _kbd_squads.initModel(sequelize);
  const kbd_user_contests = _kbd_user_contests.initModel(sequelize);
  const kbd_user_private_contests = _kbd_user_private_contests.initModel(sequelize);
  const kbd_user_teams = _kbd_user_teams.initModel(sequelize);
  const leaderboard_influencer = _leaderboard_influencer.initModel(sequelize);
  const leaderboard_week_details = _leaderboard_week_details.initModel(sequelize);
  const leaderboard_weeks = _leaderboard_weeks.initModel(sequelize);
  const leaderboards = _leaderboards.initModel(sequelize);
  const logs = _logs.initModel(sequelize);
  const migrations = _migrations.initModel(sequelize);
  const new_demop = _new_demop.initModel(sequelize);
  const notifications = _notifications.initModel(sequelize);
  const pages = _pages.initModel(sequelize);
  const pan_cards = _pan_cards.initModel(sequelize);
  const password_resets = _password_resets.initModel(sequelize);
  const payment_history = _payment_history.initModel(sequelize);
  const payments = _payments.initModel(sequelize);
  const payments_copy2 = _payments_copy2.initModel(sequelize);
  const payments_till_august = _payments_till_august.initModel(sequelize);
  const personal_access_tokens = _personal_access_tokens.initModel(sequelize);
  const players = _players.initModel(sequelize);
  const private_contests = _private_contests.initModel(sequelize);
  const rank_categories = _rank_categories.initModel(sequelize);
  const ranks = _ranks.initModel(sequelize);
  const referal_amount_details = _referal_amount_details.initModel(sequelize);
  const referal_deposit_details = _referal_deposit_details.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const settings = _settings.initModel(sequelize);
  const squads = _squads.initModel(sequelize);
  const states = _states.initModel(sequelize);
  const tds = _tds.initModel(sequelize);
  const user_contests = _user_contests.initModel(sequelize);
  const user_contests_copy1 = _user_contests_copy1.initModel(sequelize);
  const user_private_contests = _user_private_contests.initModel(sequelize);
  const user_tds_info = _user_tds_info.initModel(sequelize);
  const user_teams = _user_teams.initModel(sequelize);
  const user_teams_copy1 = _user_teams_copy1.initModel(sequelize);
  const users = _users.initModel(sequelize);
  const xx_extra = _xx_extra.initModel(sequelize);

  bkb_fixtures.belongsTo(bkb_competitions, { as: "competition", foreignKey: "competition_id"});
  bkb_competitions.hasMany(bkb_fixtures, { as: "bkb_fixtures", foreignKey: "competition_id"});
  bkb_user_contests.belongsTo(bkb_contests, { as: "contest", foreignKey: "contest_id"});
  bkb_contests.hasMany(bkb_user_contests, { as: "bkb_user_contests", foreignKey: "contest_id"});
  bkb_contests.belongsTo(bkb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bkb_fixtures.hasMany(bkb_contests, { as: "bkb_contests", foreignKey: "fixture_id"});
  bkb_private_contests.belongsTo(bkb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bkb_fixtures.hasMany(bkb_private_contests, { as: "bkb_private_contests", foreignKey: "fixture_id"});
  bkb_squads.belongsTo(bkb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bkb_fixtures.hasMany(bkb_squads, { as: "bkb_squads", foreignKey: "fixture_id"});
  bkb_user_teams.belongsTo(bkb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bkb_fixtures.hasMany(bkb_user_teams, { as: "bkb_user_teams", foreignKey: "fixture_id"});
  bkb_squads.belongsTo(bkb_players, { as: "player", foreignKey: "player_id"});
  bkb_players.hasMany(bkb_squads, { as: "bkb_squads", foreignKey: "player_id"});
  bkb_user_private_contests.belongsTo(bkb_private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  bkb_private_contests.hasMany(bkb_user_private_contests, { as: "bkb_user_private_contests", foreignKey: "private_contest_id"});
  bkb_user_contests.belongsTo(bkb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  bkb_user_teams.hasMany(bkb_user_contests, { as: "bkb_user_contests", foreignKey: "user_team_id"});
  bkb_user_private_contests.belongsTo(bkb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  bkb_user_teams.hasMany(bkb_user_private_contests, { as: "bkb_user_private_contests", foreignKey: "user_team_id"});
  bsb_fixtures.belongsTo(bsb_competitions, { as: "competition", foreignKey: "competition_id"});
  bsb_competitions.hasMany(bsb_fixtures, { as: "bsb_fixtures", foreignKey: "competition_id"});
  bsb_user_contests.belongsTo(bsb_contests, { as: "contest", foreignKey: "contest_id"});
  bsb_contests.hasMany(bsb_user_contests, { as: "bsb_user_contests", foreignKey: "contest_id"});
  bsb_fantasy_points.belongsTo(bsb_fantasy_point_categories, { as: "bsb_fantasy_point_category", foreignKey: "bsb_fantasy_point_category_id"});
  bsb_fantasy_point_categories.hasMany(bsb_fantasy_points, { as: "bsb_fantasy_points", foreignKey: "bsb_fantasy_point_category_id"});
  bsb_contests.belongsTo(bsb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bsb_fixtures.hasMany(bsb_contests, { as: "bsb_contests", foreignKey: "fixture_id"});
  bsb_private_contests.belongsTo(bsb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bsb_fixtures.hasMany(bsb_private_contests, { as: "bsb_private_contests", foreignKey: "fixture_id"});
  bsb_squads.belongsTo(bsb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bsb_fixtures.hasMany(bsb_squads, { as: "bsb_squads", foreignKey: "fixture_id"});
  bsb_user_teams.belongsTo(bsb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  bsb_fixtures.hasMany(bsb_user_teams, { as: "bsb_user_teams", foreignKey: "fixture_id"});
  bsb_squads.belongsTo(bsb_players, { as: "player", foreignKey: "player_id"});
  bsb_players.hasMany(bsb_squads, { as: "bsb_squads", foreignKey: "player_id"});
  bsb_user_private_contests.belongsTo(bsb_private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  bsb_private_contests.hasMany(bsb_user_private_contests, { as: "bsb_user_private_contests", foreignKey: "private_contest_id"});
  bsb_user_contests.belongsTo(bsb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  bsb_user_teams.hasMany(bsb_user_contests, { as: "bsb_user_contests", foreignKey: "user_team_id"});
  bsb_user_private_contests.belongsTo(bsb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  bsb_user_teams.hasMany(bsb_user_private_contests, { as: "bsb_user_private_contests", foreignKey: "user_team_id"});
  fixtures.belongsTo(competitions, { as: "competition", foreignKey: "competition_id"});
  competitions.hasMany(fixtures, { as: "fixtures", foreignKey: "competition_id"});
  investment_leaderboard.belongsTo(competitions, { as: "competition", foreignKey: "competition_id"});
  competitions.hasMany(investment_leaderboard, { as: "investment_leaderboards", foreignKey: "competition_id"});
  investment_leaderboards.belongsTo(competitions, { as: "competition", foreignKey: "competition_id"});
  competitions.hasMany(investment_leaderboards, { as: "competition_investment_leaderboards", foreignKey: "competition_id"});
  leaderboard_weeks.belongsTo(competitions, { as: "competition", foreignKey: "competition_id"});
  competitions.hasMany(leaderboard_weeks, { as: "leaderboard_weeks", foreignKey: "competition_id"});
  leaderboards.belongsTo(competitions, { as: "competition", foreignKey: "competition_id"});
  competitions.hasMany(leaderboards, { as: "leaderboards", foreignKey: "competition_id"});
  bkb_contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(bkb_contests, { as: "bkb_contests", foreignKey: "contest_category_id"});
  bsb_contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(bsb_contests, { as: "bsb_contests", foreignKey: "contest_category_id"});
  contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(contests, { as: "contests", foreignKey: "contest_category_id"});
  ftb_contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(ftb_contests, { as: "ftb_contests", foreignKey: "contest_category_id"});
  hky_contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(hky_contests, { as: "hky_contests", foreignKey: "contest_category_id"});
  kbd_contests.belongsTo(contest_categories, { as: "contest_category", foreignKey: "contest_category_id"});
  contest_categories.hasMany(kbd_contests, { as: "kbd_contests", foreignKey: "contest_category_id"});
  payments.belongsTo(contests, { as: "contest", foreignKey: "contest_id"});
  contests.hasMany(payments, { as: "payments", foreignKey: "contest_id"});
  user_contests.belongsTo(contests, { as: "contest", foreignKey: "contest_id"});
  contests.hasMany(user_contests, { as: "user_contests", foreignKey: "contest_id"});
  fantasy_points.belongsTo(fantasy_point_categories, { as: "fantasy_point_category", foreignKey: "fantasy_point_category_id"});
  fantasy_point_categories.hasMany(fantasy_points, { as: "fantasy_points", foreignKey: "fantasy_point_category_id"});
  contests.belongsTo(fixtures, { as: "fixture", foreignKey: "fixture_id"});
  fixtures.hasMany(contests, { as: "contests", foreignKey: "fixture_id"});
  private_contests.belongsTo(fixtures, { as: "fixture", foreignKey: "fixture_id"});
  fixtures.hasMany(private_contests, { as: "private_contests", foreignKey: "fixture_id"});
  squads.belongsTo(fixtures, { as: "fixture", foreignKey: "fixture_id"});
  fixtures.hasMany(squads, { as: "squads", foreignKey: "fixture_id"});
  user_teams.belongsTo(fixtures, { as: "fixture", foreignKey: "fixture_id"});
  fixtures.hasMany(user_teams, { as: "user_teams", foreignKey: "fixture_id"});
  ftb_fixtures.belongsTo(ftb_competitions, { as: "competition", foreignKey: "competition_id"});
  ftb_competitions.hasMany(ftb_fixtures, { as: "ftb_fixtures", foreignKey: "competition_id"});
  ftb_leaderboards.belongsTo(ftb_competitions, { as: "competition", foreignKey: "competition_id"});
  ftb_competitions.hasMany(ftb_leaderboards, { as: "ftb_leaderboards", foreignKey: "competition_id"});
  ftb_user_contests.belongsTo(ftb_contests, { as: "contest", foreignKey: "contest_id"});
  ftb_contests.hasMany(ftb_user_contests, { as: "ftb_user_contests", foreignKey: "contest_id"});
  ftb_fantasy_points.belongsTo(ftb_fantasy_point_categories, { as: "fantasy_point_category", foreignKey: "fantasy_point_category_id"});
  ftb_fantasy_point_categories.hasMany(ftb_fantasy_points, { as: "ftb_fantasy_points", foreignKey: "fantasy_point_category_id"});
  ftb_contests.belongsTo(ftb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  ftb_fixtures.hasMany(ftb_contests, { as: "ftb_contests", foreignKey: "fixture_id"});
  ftb_private_contests.belongsTo(ftb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  ftb_fixtures.hasMany(ftb_private_contests, { as: "ftb_private_contests", foreignKey: "fixture_id"});
  ftb_squads.belongsTo(ftb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  ftb_fixtures.hasMany(ftb_squads, { as: "ftb_squads", foreignKey: "fixture_id"});
  ftb_user_teams.belongsTo(ftb_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  ftb_fixtures.hasMany(ftb_user_teams, { as: "ftb_user_teams", foreignKey: "fixture_id"});
  ftb_squads.belongsTo(ftb_players, { as: "player", foreignKey: "player_id"});
  ftb_players.hasMany(ftb_squads, { as: "ftb_squads", foreignKey: "player_id"});
  ftb_user_private_contests.belongsTo(ftb_private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  ftb_private_contests.hasMany(ftb_user_private_contests, { as: "ftb_user_private_contests", foreignKey: "private_contest_id"});
  ftb_user_contests.belongsTo(ftb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  ftb_user_teams.hasMany(ftb_user_contests, { as: "ftb_user_contests", foreignKey: "user_team_id"});
  ftb_user_private_contests.belongsTo(ftb_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  ftb_user_teams.hasMany(ftb_user_private_contests, { as: "ftb_user_private_contests", foreignKey: "user_team_id"});
  hky_fixtures.belongsTo(hky_competitions, { as: "competition", foreignKey: "competition_id"});
  hky_competitions.hasMany(hky_fixtures, { as: "hky_fixtures", foreignKey: "competition_id"});
  hky_user_contests.belongsTo(hky_contests, { as: "contest", foreignKey: "contest_id"});
  hky_contests.hasMany(hky_user_contests, { as: "hky_user_contests", foreignKey: "contest_id"});
  hky_fantasy_points.belongsTo(hky_fantasy_point_categories, { as: "hky_fantasy_point_category", foreignKey: "hky_fantasy_point_category_id"});
  hky_fantasy_point_categories.hasMany(hky_fantasy_points, { as: "hky_fantasy_points", foreignKey: "hky_fantasy_point_category_id"});
  hky_contests.belongsTo(hky_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  hky_fixtures.hasMany(hky_contests, { as: "hky_contests", foreignKey: "fixture_id"});
  hky_private_contests.belongsTo(hky_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  hky_fixtures.hasMany(hky_private_contests, { as: "hky_private_contests", foreignKey: "fixture_id"});
  hky_squads.belongsTo(hky_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  hky_fixtures.hasMany(hky_squads, { as: "hky_squads", foreignKey: "fixture_id"});
  hky_user_teams.belongsTo(hky_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  hky_fixtures.hasMany(hky_user_teams, { as: "hky_user_teams", foreignKey: "fixture_id"});
  hky_squads.belongsTo(hky_players, { as: "player", foreignKey: "player_id"});
  hky_players.hasMany(hky_squads, { as: "hky_squads", foreignKey: "player_id"});
  hky_user_private_contests.belongsTo(hky_private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  hky_private_contests.hasMany(hky_user_private_contests, { as: "hky_user_private_contests", foreignKey: "private_contest_id"});
  hky_user_contests.belongsTo(hky_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  hky_user_teams.hasMany(hky_user_contests, { as: "hky_user_contests", foreignKey: "user_team_id"});
  hky_user_private_contests.belongsTo(hky_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  hky_user_teams.hasMany(hky_user_private_contests, { as: "hky_user_private_contests", foreignKey: "user_team_id"});
  kbd_fixtures.belongsTo(kbd_competitions, { as: "competition", foreignKey: "competition_id"});
  kbd_competitions.hasMany(kbd_fixtures, { as: "kbd_fixtures", foreignKey: "competition_id"});
  kbd_leaderboards.belongsTo(kbd_competitions, { as: "competition", foreignKey: "competition_id"});
  kbd_competitions.hasMany(kbd_leaderboards, { as: "kbd_leaderboards", foreignKey: "competition_id"});
  kbd_user_contests.belongsTo(kbd_contests, { as: "contest", foreignKey: "contest_id"});
  kbd_contests.hasMany(kbd_user_contests, { as: "kbd_user_contests", foreignKey: "contest_id"});
  kbd_contests.belongsTo(kbd_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  kbd_fixtures.hasMany(kbd_contests, { as: "kbd_contests", foreignKey: "fixture_id"});
  kbd_squads.belongsTo(kbd_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  kbd_fixtures.hasMany(kbd_squads, { as: "kbd_squads", foreignKey: "fixture_id"});
  kbd_user_teams.belongsTo(kbd_fixtures, { as: "fixture", foreignKey: "fixture_id"});
  kbd_fixtures.hasMany(kbd_user_teams, { as: "kbd_user_teams", foreignKey: "fixture_id"});
  kbd_squads.belongsTo(kbd_players, { as: "player", foreignKey: "player_id"});
  kbd_players.hasMany(kbd_squads, { as: "kbd_squads", foreignKey: "player_id"});
  kbd_user_private_contests.belongsTo(kbd_private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  kbd_private_contests.hasMany(kbd_user_private_contests, { as: "kbd_user_private_contests", foreignKey: "private_contest_id"});
  kbd_user_contests.belongsTo(kbd_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  kbd_user_teams.hasMany(kbd_user_contests, { as: "kbd_user_contests", foreignKey: "user_team_id"});
  kbd_user_private_contests.belongsTo(kbd_user_teams, { as: "user_team", foreignKey: "user_team_id"});
  kbd_user_teams.hasMany(kbd_user_private_contests, { as: "kbd_user_private_contests", foreignKey: "user_team_id"});
  referal_deposit_details.belongsTo(payments, { as: "payment", foreignKey: "payment_id"});
  payments.hasMany(referal_deposit_details, { as: "referal_deposit_details", foreignKey: "payment_id"});
  tds.belongsTo(payments, { as: "payment", foreignKey: "payment_id"});
  payments.hasMany(tds, { as: "tds", foreignKey: "payment_id"});
  squads.belongsTo(players, { as: "player", foreignKey: "player_id"});
  players.hasMany(squads, { as: "squads", foreignKey: "player_id"});
  payments.belongsTo(private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  private_contests.hasMany(payments, { as: "payments", foreignKey: "private_contest_id"});
  user_private_contests.belongsTo(private_contests, { as: "private_contest", foreignKey: "private_contest_id"});
  private_contests.hasMany(user_private_contests, { as: "user_private_contests", foreignKey: "private_contest_id"});
  ranks.belongsTo(rank_categories, { as: "rank_category", foreignKey: "rank_category_id"});
  rank_categories.hasMany(ranks, { as: "ranks", foreignKey: "rank_category_id"});
  adhaar.belongsTo(states, { as: "state", foreignKey: "state_id"});
  states.hasMany(adhaar, { as: "adhaars", foreignKey: "state_id"});
  bank_accounts.belongsTo(states, { as: "state", foreignKey: "state_id"});
  states.hasMany(bank_accounts, { as: "bank_accounts", foreignKey: "state_id"});
  users.belongsTo(states, { as: "state", foreignKey: "state_id"});
  states.hasMany(users, { as: "users", foreignKey: "state_id"});
  user_contests.belongsTo(user_teams, { as: "user_team", foreignKey: "user_team_id"});
  user_teams.hasMany(user_contests, { as: "user_contests", foreignKey: "user_team_id"});
  user_private_contests.belongsTo(user_teams, { as: "user_team", foreignKey: "user_team_id"});
  user_teams.hasMany(user_private_contests, { as: "user_private_contests", foreignKey: "user_team_id"});
  adhaar.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(adhaar, { as: "adhaars", foreignKey: "user_id"});
  bank_accounts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bank_accounts, { as: "bank_accounts", foreignKey: "user_id"});
  bkb_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bkb_private_contests, { as: "bkb_private_contests", foreignKey: "user_id"});
  bkb_user_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bkb_user_contests, { as: "bkb_user_contests", foreignKey: "user_id"});
  bkb_user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bkb_user_private_contests, { as: "bkb_user_private_contests", foreignKey: "user_id"});
  bkb_user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bkb_user_teams, { as: "bkb_user_teams", foreignKey: "user_id"});
  bsb_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bsb_private_contests, { as: "bsb_private_contests", foreignKey: "user_id"});
  bsb_user_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bsb_user_contests, { as: "bsb_user_contests", foreignKey: "user_id"});
  bsb_user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bsb_user_private_contests, { as: "bsb_user_private_contests", foreignKey: "user_id"});
  bsb_user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bsb_user_teams, { as: "bsb_user_teams", foreignKey: "user_id"});
  ftb_leaderboards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ftb_leaderboards, { as: "ftb_leaderboards", foreignKey: "user_id"});
  ftb_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ftb_private_contests, { as: "ftb_private_contests", foreignKey: "user_id"});
  ftb_user_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ftb_user_contests, { as: "ftb_user_contests", foreignKey: "user_id"});
  ftb_user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ftb_user_private_contests, { as: "ftb_user_private_contests", foreignKey: "user_id"});
  ftb_user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ftb_user_teams, { as: "ftb_user_teams", foreignKey: "user_id"});
  hky_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(hky_private_contests, { as: "hky_private_contests", foreignKey: "user_id"});
  hky_user_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(hky_user_contests, { as: "hky_user_contests", foreignKey: "user_id"});
  hky_user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(hky_user_private_contests, { as: "hky_user_private_contests", foreignKey: "user_id"});
  hky_user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(hky_user_teams, { as: "hky_user_teams", foreignKey: "user_id"});
  investment_leaderboard.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(investment_leaderboard, { as: "investment_leaderboards", foreignKey: "user_id"});
  investment_leaderboards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(investment_leaderboards, { as: "user_investment_leaderboards", foreignKey: "user_id"});
  kbd_leaderboards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(kbd_leaderboards, { as: "kbd_leaderboards", foreignKey: "user_id"});
  kbd_user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(kbd_user_private_contests, { as: "kbd_user_private_contests", foreignKey: "user_id"});
  kbd_user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(kbd_user_teams, { as: "kbd_user_teams", foreignKey: "user_id"});
  leaderboard_influencer.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(leaderboard_influencer, { as: "leaderboard_influencers", foreignKey: "user_id"});
  leaderboards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(leaderboards, { as: "leaderboards", foreignKey: "user_id"});
  pan_cards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(pan_cards, { as: "pan_cards", foreignKey: "user_id"});
  payments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(payments, { as: "payments", foreignKey: "user_id"});
  private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(private_contests, { as: "private_contests", foreignKey: "user_id"});
  referal_amount_details.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(referal_amount_details, { as: "referal_amount_details", foreignKey: "user_id"});
  referal_amount_details.belongsTo(users, { as: "earn_by_user", foreignKey: "earn_by"});
  users.hasMany(referal_amount_details, { as: "earn_by_referal_amount_details", foreignKey: "earn_by"});
  referal_deposit_details.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(referal_deposit_details, { as: "referal_deposit_details", foreignKey: "user_id"});
  referal_deposit_details.belongsTo(users, { as: "earn_by_user", foreignKey: "earn_by"});
  users.hasMany(referal_deposit_details, { as: "earn_by_referal_deposit_details", foreignKey: "earn_by"});
  tds.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(tds, { as: "tds", foreignKey: "user_id"});
  user_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_contests, { as: "user_contests", foreignKey: "user_id"});
  user_private_contests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_private_contests, { as: "user_private_contests", foreignKey: "user_id"});
  user_teams.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_teams, { as: "user_teams", foreignKey: "user_id"});

  return {
    adhaar: adhaar,
    admin_pages: admin_pages,
    admins: admins,
    bank_accounts: bank_accounts,
    banners: banners,
    bkb_competitions: bkb_competitions,
    bkb_contests: bkb_contests,
    bkb_fantasy_points: bkb_fantasy_points,
    bkb_fixtures: bkb_fixtures,
    bkb_players: bkb_players,
    bkb_private_contests: bkb_private_contests,
    bkb_squads: bkb_squads,
    bkb_user_contests: bkb_user_contests,
    bkb_user_private_contests: bkb_user_private_contests,
    bkb_user_teams: bkb_user_teams,
    blog_categories: blog_categories,
    blogs: blogs,
    bsb_competitions: bsb_competitions,
    bsb_contests: bsb_contests,
    bsb_fantasy_point_categories: bsb_fantasy_point_categories,
    bsb_fantasy_points: bsb_fantasy_points,
    bsb_fixtures: bsb_fixtures,
    bsb_players: bsb_players,
    bsb_private_contests: bsb_private_contests,
    bsb_squads: bsb_squads,
    bsb_user_contests: bsb_user_contests,
    bsb_user_private_contests: bsb_user_private_contests,
    bsb_user_teams: bsb_user_teams,
    competitions: competitions,
    contest_categories: contest_categories,
    contest_templates: contest_templates,
    contests: contests,
    copy_leaderboards: copy_leaderboards,
    coupons: coupons,
    failed_jobs: failed_jobs,
    fantasy_point_categories: fantasy_point_categories,
    fantasy_points: fantasy_points,
    faqs: faqs,
    fixtures: fixtures,
    ftb_competitions: ftb_competitions,
    ftb_contests: ftb_contests,
    ftb_fantasy_point_categories: ftb_fantasy_point_categories,
    ftb_fantasy_points: ftb_fantasy_points,
    ftb_fixtures: ftb_fixtures,
    ftb_leaderboards: ftb_leaderboards,
    ftb_players: ftb_players,
    ftb_private_contests: ftb_private_contests,
    ftb_squads: ftb_squads,
    ftb_user_contests: ftb_user_contests,
    ftb_user_private_contests: ftb_user_private_contests,
    ftb_user_teams: ftb_user_teams,
    hky_competitions: hky_competitions,
    hky_contests: hky_contests,
    hky_fantasy_point_categories: hky_fantasy_point_categories,
    hky_fantasy_points: hky_fantasy_points,
    hky_fixtures: hky_fixtures,
    hky_players: hky_players,
    hky_private_contests: hky_private_contests,
    hky_squads: hky_squads,
    hky_user_contests: hky_user_contests,
    hky_user_private_contests: hky_user_private_contests,
    hky_user_teams: hky_user_teams,
    influncer_export_data: influncer_export_data,
    investment_leaderboard: investment_leaderboard,
    investment_leaderboards: investment_leaderboards,
    jobs: jobs,
    kbd_competitions: kbd_competitions,
    kbd_contests: kbd_contests,
    kbd_fantasy_point_categories: kbd_fantasy_point_categories,
    kbd_fantasy_points: kbd_fantasy_points,
    kbd_fixtures: kbd_fixtures,
    kbd_leaderboards: kbd_leaderboards,
    kbd_players: kbd_players,
    kbd_private_contests: kbd_private_contests,
    kbd_squads: kbd_squads,
    kbd_user_contests: kbd_user_contests,
    kbd_user_private_contests: kbd_user_private_contests,
    kbd_user_teams: kbd_user_teams,
    leaderboard_influencer: leaderboard_influencer,
    leaderboard_week_details: leaderboard_week_details,
    leaderboard_weeks: leaderboard_weeks,
    leaderboards: leaderboards,
    logs: logs,
    migrations: migrations,
    new_demop: new_demop,
    notifications: notifications,
    pages: pages,
    pan_cards: pan_cards,
    password_resets: password_resets,
    payment_history: payment_history,
    payments: payments,
    payments_copy2: payments_copy2,
    payments_till_august: payments_till_august,
    personal_access_tokens: personal_access_tokens,
    players: players,
    private_contests: private_contests,
    rank_categories: rank_categories,
    ranks: ranks,
    referal_amount_details: referal_amount_details,
    referal_deposit_details: referal_deposit_details,
    roles: roles,
    settings: settings,
    squads: squads,
    states: states,
    tds: tds,
    user_contests: user_contests,
    user_contests_copy1: user_contests_copy1,
    user_private_contests: user_private_contests,
    user_tds_info: user_tds_info,
    user_teams: user_teams,
    user_teams_copy1: user_teams_copy1,
    users: users,
    xx_extra: xx_extra,
  };
}
