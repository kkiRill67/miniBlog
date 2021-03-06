import { Component } from './../core/component';
import { apiService } from './../services/api.service';
import { TransformService } from '../services/transform.service';

export class PostsComponent extends Component{
    constructor(id){
        super(id)
    }

    async onShow(){
        const data = await apiService.fetchPosts()
        const posts = TransformService.fbObAr(data)
        const html = posts.map(post => renderPost(post))
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    }

    onHide(){
        this.$el.innerHTML = ''
    }
}

function renderPost(post) {
    const tag = post.type === 'news'
    ? '<li class="tag tag-blue tag-rounded">Новость</li>'
    : '<li class="tag tag-rounded">Заметка</li>'
    return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
      </div>
    </div>
    `
}