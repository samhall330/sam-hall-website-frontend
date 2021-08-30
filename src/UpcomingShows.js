import React from "react";

function UpcomingShows(){
return(
<>
<div className="calendar-container">
  <div className="month">      
    <ul>
      <li>
        August<br></br>
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
      <li>30</li>
      <li>31</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li><span className="active">8</span></li>
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
    </ul>
    <ul className= "tour-date-list">
      <h1>Get Tickets!</h1>
        <li><a href="https://greenwichvillagecomedyclub.com/calendar/2021-08?day=04"> <p>Wednesday, August 4th - Greenwich Village Comedy Club</p></a></li>
    </ul>
    <br></br>
</div>

</>
)
}

export default UpcomingShows;