import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'demo1';

  products: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    console.log('Fetching data...');
    this.apiService.getData().subscribe(
      (response) => {
        console.log('Data fetched successfully:', response);
        this.products = response.products;
        // Directly printing products to the console
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  createData(newData: any): void {
    console.log('Creating data...', newData);
    this.apiService.postData(newData).subscribe(
      (response) => {
        console.log('Data created successfully:', response);
        this.fetchData(); // Refresh the data
        // Directly printing response to the console
        console.log(response);
      },
      (error) => {
        console.error('Error creating data', error);
      }
    );
  }

  updateData(id: number, updatedData: any): void {
    console.log('Updating data...', updatedData);
    this.apiService.updateData(id, updatedData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.fetchData(); // Refresh the data
        // Directly printing response to the console
        console.log(response);
      },
      (error) => {
        console.error('Error updating data', error);
      }
    );
  }

  deleteData(id: number): void {
    console.log('Deleting data with ID:', id);
    this.apiService.deleteData(id).subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
        this.fetchData(); // Refresh the data
        // Directly printing response to the console
        console.log(response);
      },
      (error) => {
        console.error('Error deleting data', error);
      }
    );
  }
}
