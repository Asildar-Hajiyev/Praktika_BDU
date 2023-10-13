import React, { useState } from "react";
import {FaSortDown,FaSortUp,FaSort} from "react-icons/fa"

const Table = ({ head, body, searchable }) => {
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const filteredData = body
    ?.filter((items) =>
      items.some((item) =>
        item
          ?.toString()
          ?.toLocaleLowerCase("en-US")
          ?.includes(search.toLocaleLowerCase("en-US"))
      )
    )
    .sort((a, b) => {
      if (sorting?.orderBy === "asc") {
        return a[sorting?.key].toString().localeCompare(b[sorting?.key]);
      }
      if (sorting?.orderBy === "desc") {
        return b[sorting?.key].toString().localeCompare(a[sorting?.key]);
      }
    });

  return (
    <>
      <div className="w-full border rounded p-4">
        <div className="px-3 flex">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Place Search.."
            className="h-10 outline-none focus:border-black border rounded text-sm px-4 w-full border-gray-300"
          />
          {sorting && (
            <button 
            onClick={()=>{setSorting(false)}}
            className="border h-10 rounded border-red-400 text-red-400 text-sm px-4 whitespace-nowrap">
              siralamani legv edin
            </button>
          )}
        </div>
        <table className=" w-full ">
          <hgroup className="p-4 w-full">
            <thead className="">
              <tr className="text-left text-sm font-semibold text-gray-500 p-3 border-b bg-gray-50">
                {head.map((h, key) => (
                  <th width={h?.width} className="px-3" key={key}>
                    <div className="inline-flex items-center gap-x-2">
                    {h.name}
                    {h.sortable && (
                      <button
                        onClick={() => {
                          if (sorting?.key === key) {
                            setSorting({
                              key,
                              orderBy:
                                sorting.orderBy === "asc" ? "desc" : "asc",
                            });
                          } else {
                            setSorting({ key, orderBy: "asc" });
                          }
                        }}
                      >
                        {
                            sorting?.key === key &&(sorting?.orderBy==="asc"? <FaSortDown size={14}/>:< FaSortUp size={14}/>)
                        }{
                            sorting?.key !== key &&<FaSort size={14}/>
                        }
                      </button>
                    )}
                  
                    </div>
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((items, key) => (
                <tr key={key}>
                  {items.map((item, key) => (
                    <td className="px-3" key={key}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </hgroup>
        </table>
      </div>
    </>
  );
};

export default Table;
