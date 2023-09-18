import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { Barber } from '../interfaces/barber.interface';

@Injectable()
export class BarberService {
  private route = '/barbers';

  barbersDbRef: AngularFireList<Barber>;

  constructor(private db: AngularFireDatabase) {
    this.barbersDbRef = this.db.list(this.route);
  }

  getAllBarbers() {
    return this.barbersDbRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() })),
        ),
      );
  }

  createNewBarber(barber: Barber) {
    return this.barbersDbRef.push(barber);
  }

  deleteBarber(key: string) {
    return this.barbersDbRef.remove(key);
  }
}
