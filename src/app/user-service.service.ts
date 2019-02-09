import { Injectable } from '@angular/core';
import { User } from './User';
import { Headers, Http } from '@angular/http';
import { Course } from './Course';
import { Classroom } from './Classroom';

@Injectable()
export class UserServiceService {
	//private baseUrl = 'http://localhost:8080';
  private baseUrl = 'https://graduation-server.herokuapp.com';


  constructor(private http: Http) { }

  registerUser(userData: User): Promise<User> {

    return this.http.post(this.baseUrl + '/auth/register?firstname='+userData.firstName+'&lastname='+userData.lastName+'&email='+userData.email+'&username='+userData.username+'&password='+userData.password+'&gender='+userData.gender+'&date_of_birth='+userData.dateOfBirth,userData)
      .toPromise().then(response => response.json() as User);
  }

  loginUser(email: string,password: string): Promise<string> {
    return this.http.get(this.baseUrl + '/auth/login?email='+email+ '&password='+ password)
      .toPromise().then(response => response.text() as string);
  }

  addCourse(token: string,courseData: Course):Promise<string> {
    
    return this.http.post(this.baseUrl + '/teacher/courses?token='+token+ '&title='+courseData.title+ '&detailed_title='+courseData.detailed_title+ '&description='+courseData.description+ '&category='+courseData.category+ '&level='+courseData.level,courseData).toPromise().then(response => response.text() as string);
  }

  addClassroom(token: string,classroomData: Classroom):Promise<string> {
    return this.http.post(this.baseUrl + '/teacher/classrooms?token='+token+ '&classroom_name='+classroomData.classroomName,classroomData).toPromise().then(response => response.text() as string);
  }

  getCourses(token: string):  Promise<Course[]> {
    return this.http.get(this.baseUrl + '/teacher/courses?token='+token)
      .toPromise()
      .then(response => response.json() as Course[]);

  }

  getClassrooms(token: string):  Promise<Classroom[]> {
    return this.http.get(this.baseUrl + '/teacher/classrooms?token='+token)
      .toPromise()
      .then(response => response.json() as Classroom[]);
  }

  getChildren(token: string):  Promise<User[]> {
    console.log(this.baseUrl + '/parent/children?token='+token);
    return this.http.get(this.baseUrl + '/parent/children?token='+token)
      .toPromise()
      .then(response => response.json() as User[]);
  }

    
  addChild(token: string,childData: User):Promise<string> {
    return this.http.post(this.baseUrl + '/parent/addchild?token='+token+ '&firstname='+childData.firstName+'&date_of_birth='+childData.dateOfBirth+'&email='+childData.email+'&password='+childData.password+'&username='+childData.username+'&gender='+1+'&grade='+childData.grade,childData).toPromise().then(response => response.text() as string);
  }


  logoutUser(token: string):Promise<string>{
  	return this.http.get(this.baseUrl + '/auth/logout?token='+token)
      .toPromise().then(response => response.text() as string);
  }
}