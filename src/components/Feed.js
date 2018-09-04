import React, { Component } from 'react';
import  FeedItem from "./Feed-item"
import "./Feed.css";

const FeedList = [
  {
  heading: 'Stuff',
  content: 'yadda yadda yadda'
  },
  {
  heading: 'More Stuff',
  content: 'Elly smells'
  },
  {
  heading: '4:20 broh',
  content: 'huhuhhuhuhuhuhuhuhuh'
  },
  {
    heading: '4:20 broh',
    content: 'huhuhhuhuhuhuhuhuhuh'
    },
    {
      heading: '4:20 broh',
      content: 'huhuhhuhuhuhuhuhuhuh'
      },
      {
        heading: '4:20 broh',
        content: 'huhuhhuhuhuhuhuhuhuh'
        },
        {
          heading: '4:20 broh',
          content: 'huhuhhuhuhuhuhuhuhuh'
          }
]

const Feed = () => {
  return (<div className="Feed">
  <div class="feed-header">
    <p>Whats happening</p>
  </div>
  <div className="feed-item">
    <div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAV1BMVEX///91dXWAgIB4eHi6urq1tbV9fX339/f8/PzU1NSmpqb29vbz8/ORkZGMjIypqani4uLAwMDt7e2Ghoafn5/MzMyvr6/Gxsbd3d2WlpbW1tbo6Ojf398U+BV4AAADP0lEQVR4nO3ch5qqMBAFYEIvoqIUxfv+z3nFsmsDIROYyX7nf4IzEkhh0HEAAAAAAAAAAAAAAAAMWSV+mu9dz3P3eeonK+4802yDtXqxDrbcqcaKirf0txqKiDvbCJkffo7fCf2MO983jdsfv+NW3AkHnfLh+J3jjjtlv2pg9DyMo4Q7Z596TPxOwJ30ozgdm1+pNOZO+y4ux+dXqpRXwYTf/3INuPO+Gj3+74TdB9XU/EqJehadRj0/n4WS5oMR89e7I3fqX41OfqXErCqyL+ufPq6UlZ2vl18pnzv5VaRxB98ugYz9QaGbX6mCO/tFz/5rjDV39s5WP79SEvbJAaUACQsKwggSMYZWlPxK8Z8XJbQC+Jd02rPYFf9cNnEj84p/Y6O1EP2Vc+d39rQC9tz5Hc2V6J3Lnd/xaAV43PntL8D6IWT9TWz9Y9T6icz6pYT1izniclrAyQppQ8N/D/+BLSVpU3/iTt+x/ViFcrDVcGe/iLSXQ0KOFq0/3NW+BFIugNYbso6YFxyOc9TJL+gVk7Oz/SWfzpKOfxn3ZPKCQsIi4snEjc2GO+8b65s9JrXbbATmdybcB+LG/11iecvZeT4YMaNJbvo7q+xuu3S6xteBElxfzPptgOWtxxd2N39fvbTfCzj/AQAAAAAA+C46tU2wKc/bmdDzlBeetzRlGjTJVv6uZnVo6uPQpv64KVr+XtePokNRjuwdcku/lXUxsqSe/LJ4XUv5TP1foN3zlAcH5lPeONkQe+bCNGE7LIrblNiyeOWlCcd1OAXE3/6RWy/c9RFXxF6/d3m13GXICmKv5Weuv8xjKQuMjPxPvGD+EqKhv40wUcLMz6RvfxtB587ZQ3TS6omYKp/rHD72Zxv8z7xglgfSzviTs18+w4vAw+yj/1HYms7fLDR8fhi+lwmdibqMNtRpfjQvpgLNnjgqY+/Et0uP/xvP0IQQL/j8fLY3s64gfqNBYaQvZ8c0gDqeiQmN8QIoVRsoYJbNy1ghfVXUcuY30V06+Z+PzKKPoUndlObRG6xJHynR0T8WnXUL/B39c13e/EqhABSAAlAACkABKAAFoAAUgAL4CgAAAAAAAAAAAAAAgD/nP6a4MRSTGPY+AAAAAElFTkSuQmCC" />
    </div>
    <div>
    {FeedList.map((item, index) =>
          <FeedItem heading ={item.heading}
            content={item.content}
            key={index}/>
        )}
    </div>
  </div>
  </div>);
};

export default Feed;