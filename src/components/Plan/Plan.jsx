import { CircleTable } from "./CircleTable";
import { CommonTable } from "./CommonTable";
import "./style.css";

export const Plan = ({ table, side }) => {
  return (
    <div className="plan">
      <div className="scena">Сцена</div>
      <div className="plan__area-1">
        <div className="plan__side">
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={40} />
            <CommonTable activeNumber={table} side={side} number={39} />
            <CommonTable activeNumber={table} side={side} number={38} />
            <CommonTable activeNumber={table} side={side} number={37} />
            <CommonTable activeNumber={table} side={side} number={36} />
            <CommonTable activeNumber={table} side={side} number={35} />
            <CommonTable activeNumber={table} side={side} number={34} />
          </div>
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={33} />
            <CommonTable activeNumber={table} side={side} number={32} />
            <CommonTable activeNumber={table} side={side} number={31} />
            <CommonTable activeNumber={table} side={side} number={30} />
            <CommonTable activeNumber={table} side={side} number={29} />
            <CommonTable activeNumber={table} side={side} number={28} />
            <CommonTable activeNumber={table} side={side} number={27} />
          </div>
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={26} />
            <CommonTable activeNumber={table} side={side} number={25} />
            <CommonTable activeNumber={table} side={side} number={24} />
            <CommonTable activeNumber={table} side={side} number={23} />
            <CommonTable activeNumber={table} side={side} number={22} />
            <CommonTable activeNumber={table} side={side} number={21} />
          </div>
        </div>
        <div className="">1 этаж</div>
        <div className="plan__side">
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={20} />
            <CommonTable activeNumber={table} side={side} number={19} />
            <CommonTable activeNumber={table} side={side} number={18} />
            <CommonTable activeNumber={table} side={side} number={17} />
            <CommonTable activeNumber={table} side={side} number={16} />
            <CommonTable activeNumber={table} side={side} number={15} />
          </div>
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={14} />
            <CommonTable activeNumber={table} side={side} number={13} />
            <CommonTable activeNumber={table} side={side} number={12} />
            <CommonTable activeNumber={table} side={side} number={11} />
            <CommonTable activeNumber={table} side={side} number={10} />
            <CommonTable activeNumber={table} side={side} number={9} />
            <CommonTable activeNumber={table} side={side} number={8} />
          </div>
          <div className="plan__column">
            <CommonTable activeNumber={table} side={side} number={7} />
            <CommonTable activeNumber={table} side={side} number={6} />
            <CommonTable activeNumber={table} side={side} number={5} />
            <CommonTable activeNumber={table} side={side} number={4} />
            <CommonTable activeNumber={table} side={side} number={3} />
            <CommonTable activeNumber={table} side={side} number={2} />
            <CommonTable activeNumber={table} side={side} number={1} />
          </div>
        </div>
      </div>
      <div className="plan__area-2">
        <div className="">2 этаж</div>
        <div className="plan__area-2-inner">
          <CircleTable activeNumber={table} number={44} />
          <CircleTable activeNumber={table} number={43} />
          <CircleTable activeNumber={table} number={42} />
          <CircleTable activeNumber={table} number={41} />
        </div>
      </div>
    </div>
  );
};
