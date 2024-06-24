import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRooms } from '../../Shared/interfaces/IRooms';
import { RoomService } from '../../Shared/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
//enject services in constractor
//complext roomlist from irooms
roomList:IRooms[]=[];
errorMSG;
  constructor(private roomServ:RoomService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void
   {
     //we shoud subscribe to deal with this services
     //1-subscribe return data
     //2-return error if make issue
     this.roomServ.getAllRooms().subscribe
     (data=>
      {
        this.roomList=data;

      },
      ServicesErr=>
      {
        this.errorMSG=ServicesErr;

      }
      )
   }

}
