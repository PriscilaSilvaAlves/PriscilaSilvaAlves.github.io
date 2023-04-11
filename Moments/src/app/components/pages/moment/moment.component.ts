import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environments';
import { faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Comment } from 'src/app/Comment';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  moment?:Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;
  
  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService
    ){ }
  ngOnInit(): void{
    //ID que está na URL
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe((item)=>this.moment=item.data);
    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    });
  }
  get text(){
    return this.commentForm.get("text")!;
  }
  get username(){
    return this.commentForm.get("username")!;
  }
  async removeHandler(id:number){
    //Await é para esperar a resposta da API voltar quando o 
    //moment for excluído do banco de dados.
    await this.momentService.removeMoment(id).subscribe();
    //Depois de receber a resposta, posta a mensagem na tela
    this.messagesService.add("Momento excluído com sucesso");
    //Redirecionamento para outra página:
    this.router.navigate(['/']);
  }
  async onSubmit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }
    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);
    await this.commentService.createComment(data).subscribe((comment) => {
      this.moment!.comments!.push(comment.data)
    });
    this.messagesService.add("Comentário adicionado.");
    //Resetar o Form:
    this.commentForm.reset();
    formDirective.resetForm();
  }
}