import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from './model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient.get<Voucher[]>(`${environment.apiUrl}vouchers`);
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.getVouchers().pipe(
      map((v) => v.find((v: Voucher) => v.ID === id))
    );
  }
}
