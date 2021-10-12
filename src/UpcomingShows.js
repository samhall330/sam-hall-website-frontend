import React from "react";
import {Link} from "react-router-dom";

function UpcomingShows(){
return(
<>
<div className="calendar-container">
  <div className="month">      
    <ul>
      <li>
        <br></br>
        October<br></br>
        <span>2021</span>
      </li>
    </ul>
  </div>
    <ul className="weekdays">
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Th</li>
      <li>Fri</li>
      <li>Sat</li>
      <li>Sun</li>
    </ul>
    <ul className="days">  
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      {/* <li><span className="active"><a href="https://www.instagram.com/samhallllllllll/">30</a></span></li> */}
    </ul>
    <ul className= "tour-date-list">
      <h1>Get Tickets!</h1>
      <br></br>
      <h3>No upcoming shows... yet 😏</h3>
      <br></br>
      <h4>(<Link to="/contact">Book Me!</Link>)</h4>
     
    </ul>
    <br></br>
</div>

</>
)
}

export default UpcomingShows;