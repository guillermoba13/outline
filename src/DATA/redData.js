import React, {Component} from 'react';

export default class redData extends Component{
    state={
        posts:[]
    }
    async componentDidMount(){
        const res = await fetch('https://github.com/guillermoba13/outline/blob/master/src/DATA/data.json')
        const data = await res.json();
        this.setState({posts: data})
    }
    render(){
        return(
            <div>
                <h1>post</h1>
                {
                    this.state.posts.map(post =>{
                        return  <div key={post.id}>
                                    <h1>{post.name}</h1>
                                    <p>{post.lastName}</p>
                                    <p>{post.language.language_1}</p>
                                    <p>{post.language.language_2}</p>
                                    <p>{post.edad}</p>
                                    <p>{post.email}</p>
                                    <p>{post.position}</p>
                                    <p>{post.profile}</p>
                                    <p>{post.schools.college.title}</p>
                                    <p>{post.schools.college.description}</p>
                                    <p>{post.highSchool.title}</p>
                                    <p>{post.highSchool.description}</p>
                                    <p>{post.experience.work_1.title}</p>
                                    <p>{post.experience.work_1.description}</p>
                                    <p>{post.experience.work_2.title}</p>
                                    <p>{post.experience.work_2.description}</p>
                                    <p>{post.experience.work_3.title}</p>
                                    <p>{post.experience.work_3.description}</p>
                                    <p>{post.skills}</p>
                                    <p>{post.extra}</p>
                                 </div>
                    })
                }
            </div>
        );
    }
}