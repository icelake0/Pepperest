import React from 'react';

const ListFooter = ({meta, links, gotoPage}) => {

  return (
    <div className="list-footer">
        <p className="list-footer-label">Showing {meta?.from} - {meta?.to} of {meta?.total} entries</p>
        <div className="list-footer__pagination">
        {links?.prev ? 
             <span  className="list-footer__pagination-prev" 
                    onClick = {(event) => {gotoPage(meta?.current_page-1)}}>Previous
            </span> : null
        }
        <ul className="d-flex flex-row">
        {
            [...Array(meta?.last_page).keys()].map((pageIndex) => 
            <li className=
                { pageIndex+1 == meta?.current_page ? "list-footer__pagination-page-number list-footer-text list-footer-text-alt" : 
                    "list-footer__pagination-page-number list-footer-text"
                }
                key = {pageIndex}
                onClick = {(event) => {gotoPage(pageIndex+1)}}
            >{pageIndex+1}</li>)
        }
        </ul>
        {links?.next ? 
            <span   className="list-footer__pagination-next list-footer-text list-footer-text-alt"
                    onClick = {(event) => {gotoPage(meta.current_page+1)}}>Next
            </span> : null
        }
        </div>
    </div>
  );

};

export default ListFooter;
