import { Link, useSearchParams } from "react-router-dom";
import { Plan } from "../components/Plan/Plan";
import { USERS } from "../users";

export const PlanPage = () => {
  let [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { table, side } = USERS.find((user) => user.id === Number(id));

  const direction = side === "left" ? "левая" : "правая";

  return (
    <div className="">
      <Link to="/" className="back">
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.41379 8.485L9.48479 15.556L8.07079 16.97L0.292786 9.192C0.105315 9.00447 0 8.75016 0 8.485C0 8.21984 0.105315 7.96553 0.292786 7.778L8.07079 0L9.48479 1.414L2.41379 8.485Z"
            fill="white"
          />
        </svg>
        на главную
      </Link>
      <div className="info">
        <div className="page-title">Ваше место:</div>
        <div className="info__text">
          стол {table}, {direction} сторона
        </div>
        <div className="info__additional">
          Определите сторону, ориентируясь по направлению к сцене
        </div>
      </div>
      <Plan table={table} side={side} />
    </div>
  );
};
