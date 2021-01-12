import PropTypes, { InferProps } from "prop-types";
import { User } from "../../State/ducks/table";

import "./CurrentUser.css";

interface CurretnUserProps {
  user: User;
}

export function CurrentUser({
  user,
}: CurretnUserProps & InferProps<typeof CurrentUser.propTypes>) {
  return (
    <div className="Table__current">
      <div className="Table__current--container">
        {Object.keys(user).length && (
          <>
            <div className="Table__current-item">
              <span>id:</span> {user.id}
            </div>
            <div className="Table__current-item">
              <span>firstName:</span> {user.firstName}
            </div>
            <div className="Table__current-item">
              <span>lastName:</span> {user.lastName}
            </div>
            <div className="Table__current-item">
              <span>email:</span> {user.email}
            </div>
            <div className="Table__current-item">
              <span>phone:</span> {user.phone}
            </div>
            <div className="Table__current-item">
              <span>adress:</span>
              <div className="Table__current-item__nested">
                <span>city: </span>
                {user.adress.city}
              </div>
              <div className="Table__current-item__nested">
                <span>state: </span>
                {user.adress.state}
              </div>
              <div className="Table__current-item__nested">
                <span>streetAddress: </span>
                {user.adress.streetAddress}
              </div>
              <div className="Table__current-item__nested">
                <span>zip: </span>
                {user.adress.zip}
              </div>
            </div>
            <div className="Table__current-item">
              <span>description:</span> {user.description}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

CurrentUser.propTypes = {
  user: PropTypes.object,
};
