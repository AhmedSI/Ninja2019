import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '.././user-service.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Course } from '../Course';
import { Section } from '../Section';
import { Lecture } from '../Lecture';
import { Quiz } from '../Quiz';
import { fileContent } from '../fileContent';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  token: string = "initial";
  id : string ;
  course:Course;
  sections:Section[];
  lectures:Lecture[][];
  quiz:Quiz=new Quiz();
  selectedLecture:string;
  lecture:Lecture=new Lecture();
  lectureContent:fileContent;
  request:string;
  // section:Section;


  constructor(
    private userService: UserServiceService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.course= new Course();

    this.token = localStorage.getItem('token');
    this.id = this.router.snapshot.paramMap.get("id");
    // this.sections=new Section[];
    this.getCourseById();
    
  }

  setLecture(id){
    this.selectedLecture = id;
    this.getLecture();
  }

    getLectureContent(id:Number){
    this.userService.getLectureContent(this.token,id).then(file=>{
      this.lectureContent = file;
      // console.log(file);
    })
  }

  getLecture(){
    this.userService.getLecture(this.token,this.selectedLecture).then(lecture=>{
      this.lecture = lecture;
      this.getLectureContent(lecture.lectureContentId);
    })
  }

  getCourseById(){

      this.userService.getCourseById(this.token,this.id)
      .then(coursef => {
        this.course = JSON.parse(JSON.stringify(coursef))
        // console.log(this.course);
      });
      // this.sections=this.course.sections;
    }

    quizModal(lecture:Lecture){
      this.quiz.title=lecture.name;
    }
}
