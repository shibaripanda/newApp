import React from "react";
import { TableReviews } from "../components/Table/TableReviews.tsx";

export const ServiceScreen = () => {

    const data = [
        {
          title: 'Foundation',
          author: 'Isaac Asimov',
          year: 1951,
          reviews: { positive: 5, negative: 2 },
        },
        {
          title: 'Frankenstein',
          author: 'Mary Shelley',
          year: 1818,
          reviews: { positive: 5, negative: 1 },
        },
        {
          title: 'Solaris',
          author: 'Stanislaw Lem',
          year: 1961,
          reviews: { positive: 5, negative: 5 },
        },
        {
          title: 'Dune',
          author: 'Frank Herbert',
          year: 1965,
          reviews: { positive: 8576, negative: 663 },
        },
        {
          title: 'The Left Hand of Darkness',
          author: 'Ursula K. Le Guin',
          year: 1969,
          reviews: { positive: 6631, negative: 993 },
        },
        {
          title: 'A Scanner Darkly',
          author: 'Philip K Dick',
          year: 1977,
          reviews: { positive: 8124, negative: 1847 },
        },
      ];

    return (
       <div style={{width: '100%'}}><TableReviews data={data}/></div> 
    )
}