
import style from './lesson.module.css'
import { data } from '../../helper/data'

const LessonCard = () => {
    return (
      <div className={style.container}>
        <h1>6 lessons today</h1>
        <div className={style.lesson}>
          {data.map((info) => {
            return (
              <div className={style.lessonCard}>
                <div>
                  <img src={info.image} alt="" />
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
        <button>Clear List</button>
      </div>
    );
}

export default LessonCard