<template>
<div class="transit">
 <v-container>
     <!-- <h2 class="subheading mx-3 header-color" style="text-align: center;">TRANSIT FORM</h2> -->
    <table class="invoice-box" ref="printTable">
     <div>
        <h3 style="text-align: center; font-size: 20px;">PROVIDENCE RESEARCH LIMITED</h3>
        <table cellpadding="0" cellspacing="0">
          <tr class="information">
      <td colspan="3">
        <table>
          <tr>
            <td>
              10B, Akande Street,<br>Chamuke Estate,<br> Warri, Delta State, Nigeria<br>
              +2347053452312.
            </td>
              <td class="deliver" style="font-size: 18px;">DELIVERY NOTE</td>
            <td>
              64, Michael Adebiyi Street,<br>Off Joyce-B Road,Ring Road,<br>Ibadan, Oyo State,<br>
               +2347053452312.
            </td>
          </tr>
        </table>
      </td>
     </tr> 
     <tr class="">
       <td>
         <table>
           <tr>
            <td>
              To: __________________________________________________________________
            </td>
           </tr>
           <tr>
            <td>
              Address: _________________________________________________________________
            </td>
           </tr>
           <tr>
            <td>
              Invoice Number: __________________________________________________________________
            </td>
           </tr>
           <tr>
            <td>
              Date Of issue: _____________________________________________________________________
            </td>
           </tr>
         </table>
       </td>
     </tr>
     <!--  -->
     <tr class="items">     
      <td>
         <table>
            <tr>
            <th style="width: 60px; text-align: center">
              S/N
            </th>
            <th style="text-align: center; width: 600px;">
            DESCRIPTION
            </th>
            <th style="width: 80px;">
              QTY
            </th>
            </tr>
            <!-- first row -->
            <tr>
              <th>1
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- second row -->
             <tr>
              <th>2
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- third row -->
             <tr>
              <th>3
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- fourth row -->
             <tr>
              <th>4
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- fifth row -->
             <tr>
              <th>5
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- sixth row -->
             <tr>
              <th>6
              </th>
              <th>
                
              </th>
              <th>
              </th>
            </tr>
            <!-- seventh row -->
             
         </table> 
      </td>
     </tr>
         <tr class="items">     
      <td>
         <table>
            <tr>
              <td style="text-align: center">
                --------------------------------------------------------<br>
                   (Assigned By)
              </td>
              <td style="text-align: center;">
                --------------------------------------------------------<br>
                Signature & Date
              </td>
            </tr>
            <!-- 2nd -->
             <tr>
              <td style="text-align: center;">
                --------------------------------------------------------<br>
                   (Courier Service)
              </td>
              <td style="text-align: center;"> 
                --------------------------------------------------------<br>
                Signature & Date
              </td>
            </tr>
            <!-- third -->
             <tr>
              <td style="text-align: center;">
                --------------------------------------------------------<br>
                   (Received By)
              </td>
              <td style="text-align: center;">
                --------------------------------------------------------<br>
                Signature & Date
              </td>
            </tr>
         </table>
      </td>
         </tr>
        </table> 
         <!-- print button -->
       <div class="text-right">
              <v-btn small color="#1976D2" class="white--text" v-on:click="print()">
                <v-icon small left>mdi-printer</v-icon>Print
                </v-btn>
        </div>
     </div>
    </table>
 </v-container>

</div>
    
</template>



<script>
import StoreNav from '../components/StoreNav'
import  Printd  from 'printd'
export default {
    components:{
        StoreNav
    },
    data(){
      return{
      cssText : `
      .invoice-box{
  background-color: white;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  max-width: 800px;
  line-height: 24px;
  color: #5F5D5D;
}
.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
}
.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}
.invoice-box table td.deliver{
  padding: 40px;
  text-align: center;
}
.invoice-box table tr td:nth-child(n + 3) {
  text-align: right;
}
.invoice-box table tr.items th:first-child{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.invoice-box table tr.items th{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.invoice-box table tr.items td{
  padding: 8px;
}
.transit{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
.header-color{
     color: #5F5D5D;
}
 
`
      }
    },
    methods:{
      print(){
        this.d = new Printd()
       this.d.print( this.$el, [this.cssText])
      },
      download(){
      
      }

    },
    mounted(){
      const { Printd } = window.printd
      this.d = new Printd()
    }
}
</script>


<style scoped>
.transit{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
.header-color{
     color: #5F5D5D;
}
.invoice-box{
  background-color: white;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  max-width: 800px;
  line-height: 24px;
  color: #5F5D5D;
}
.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
}
.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}
.invoice-box table td.deliver{
  padding: 40px;
  text-align: center;
}
.invoice-box table tr td:nth-child(n + 3) {
  text-align: right;
}
.invoice-box table tr.items th:first-child{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.invoice-box table tr.items th{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.invoice-box table tr.items td{
  padding: 8px;
}
</style>