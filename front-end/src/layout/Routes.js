import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import NewReservation from "../reservations/NewReservation";
import EditReservation from "../reservations/EditReservation";
import SeatForm from "../reservations/SeatForm";
import TableNew from "../tables/TableNew";
import Search from "../search/Search";

/**
 * Defines all the routes for the application.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations/new">
        <NewReservation />
      </Route>
      <Route exact={true} path="/reservations/:reservation_id/seat">
        <SeatForm />
      </Route>
      <Route exact={true} path="/reservations/:reservation_id/edit">
        <EditReservation editMode={true} />
      </Route>
      <Route exact={true} path="/tables/new">
        <TableNew />
      </Route>
      <Route exact={true} path="/search">
        <Search />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={today()} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;