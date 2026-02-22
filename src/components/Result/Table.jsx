import { Icon } from "@iconify/react";
import React from "react";

const Table = ({ tableData }) => {
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="relative overflow-x-auto  border rounded-xl border-gray-400 mt-3 bg-[#f6f9fd] ">
      <table className="w-full text-sm text-left  ">
        <thead className="text-sm border-b border-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              STOP
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              LOCATION
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              DISTANCE FROM PREVIOUS
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              FUEL COST
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((elem, index) => {
            const isFirst = index === 0;
            const isLast = index === tableData.length - 1;
            return (
              <tr
                key={index}
                className=" border-b border-gray-400 border-default"
              >
                <th
                  scope="row"
                  className="px-6 py-5 font-semibold text-heading whitespace-nowrap text-white "
                >
                  <span
                    className={`${isFirst ? "bg-green-700" : "bg-blue-700"} px-5.5 py-4 rounded-full`}
                  >
                    {letter[index]}
                  </span>
                  {isFirst && (
                    <span className="text-black bg-gray-300 ml-1 p-1 rounded-2xl ">
                      Start
                    </span>
                  )}
                  {isLast && (
                    <span className="text-black bg-gray-300 ml-1 p-1 rounded-2xl ">
                      End
                    </span>
                  )}
                </th>
                <td className="px-6 py-5 flex items-center ">
                  <Icon icon="bx:map" width="24" height="24" />
                  {elem.location}
                </td>
                <td className="px-6 py-5  font-semibold ">
                  {isFirst ? (
                    "__"
                  ) : (
                    <span
                      className={`${index === 0 ? "" : "bg-purple-200 rounded-xl px-2 py-1 text-purple-700"}`}
                    >
                      {elem.distance}
                    </span>
                  )}
                </td>
                <td className="px-6 py-5 ">
                  {isFirst ? (
                    "__"
                  ) : (
                    <span
                      className={`${index === 0 ? "" : "bg-red-200 rounded-xl px-2 py-1 text-red-700"}`}
                    >
                      {index === 0 && <span>__</span>}
                      {elem.price}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
