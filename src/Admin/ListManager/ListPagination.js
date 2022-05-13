import React,{useState} from "react";
import Listproducts from "./ListProducts";
const ListPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(4);
  return (
    <div>
      <Listproducts
        currentPage={currentPage}
        userPerPage={userPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListPagination;
