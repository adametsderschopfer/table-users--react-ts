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
              <span>Выбран пользователь:</span> {user.firstName}
            </div>
            <div className="Table__current-item">
              <span>Описание</span>
           <textarea>{{user.description}}</textarea>

            </div>
            <div className="Table__current-item">
              <span>adress:</span>
              <div className="Table__current-item__nested">
                <span>Адрес проживания: </span>
                {user.adress.streetAddress}
              </div>
              <div className="Table__current-item__nested">
                <span>Город: </span>
                {user.adress.city}
              </div>
              <div className="Table__current-item__nested">
                <span>Провинция/штат: </span>
                {user.adress.state}
              </div>
              <div className="Table__current-item__nested">
                <span>Индекс: </span>
                {user.adress.zip}
              </div>
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
