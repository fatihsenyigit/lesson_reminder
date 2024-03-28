
import style from './lesson.module.css'
import { data } from '../../helper/data'
import { useState } from 'react';
import Lesson from "../../pages/Lesson"

const LessonCard = () => {
    const [clear, setClear] = useState(true)

    return (
      <div className={style.container}>
        <div className={style.lesson}>
          {clear ? (
            <div className={style.scheduleContainer}>
              <div className={style.numberLesson}>
                <h1>6 lessons today</h1>
              </div>
              <div className={style.schedule}>
                {data.map((info) => {
                  return (
                    <div className={style.lessonCard}>
                      <div>
                        <img src={info.image} alt=""/>
                      </div>
                      <div>
                        <p>
                          <span>Lesson Name: </span>
                          {info.name}
                        </p>
                        <p>
                          <span>Lesson Hour: </span>
                          {info.hour}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <Lesson></Lesson>
            </div>
          )}
        </div>
        <button onClick={() => setClear(false)}>Clear List</button>
      </div>
    );
}

export default LessonCard