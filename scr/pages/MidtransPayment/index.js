import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MidtransSdk from 'react-native-midtrans-sdk';
const midtransClient = require('midtrans-client');

const MidtransPayment = () => {
  async function didPembayaran() {
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-vwww3cfLpopUoxJIi1cx_IPL',
      clientKey: 'SB-Mid-client-qUM_wn7e2v5xH4DF',
    });

    let parameter = {
      transaction_details: {
        order_id: 'test-transaction-123',
        gross_amount: 200000,
      },
      credit_card: {
        secure: true,
      },
    };

    await snap
      .createTransaction(parameter)
      .then((transaction) => {
        // transaction redirect_url
        let redirectUrl = transaction.redirect_url;
        console.log('redirectUrl:', redirectUrl);
      })
      .catch((error) => {
        console.log(error);
      });

    // alternative way to create redirectUrl
    // snap.createTransactionRedirectUrl(parameter)
    //     .then((redirectUrl)=>{
    //         console.log('redirectUrl:',redirectUrl);
    //     })
  }

  const didPayment = () => {
    const optionConect = {
      clientKey: 'VT-CLIENT-AAAAAAAAAAAAA',
      urlMerchant: 'http://example.com/payment',
    };
    const transRequest = {
      transactionId: '001',
      totalAmount: 6000,
    };
    var itemDetails = [
      {id: '001', price: 1000, qty: 4, name: 'cimory'},
      {id: '002', price: 2000, qty: 2, name: 'cofimix'},
    ];
    var creditCardOptions = {
      saveCard: false,
      saveToken: false,
      paymentMode: 'Normal',
      secure: false,
    };
    var userDetail = {
      fullName: 'Ahmad',
      email: 'ah@mad.com',
      phoneNumber: '0850000000',
      userId: 'U01',
      address: 'kudus',
      city: 'kudus',
      country: 'IDN',
      zipCode: '59382',
    };
    var optionColorTheme = {
      primary: '#c51f1f',
      primaryDark: '#1a4794',
      secondary: '#1fce38',
    };
    var font = {
      defaultText: 'open_sans_regular.ttf',
      semiBoldText: 'open_sans_semibold.ttf',
      boldText: 'open_sans_bold.ttf',
    };
    var callback = (res) => {
      console.log(res);
    };
    MidtransSdk.checkOut(
      optionConect,
      transRequest,
      itemDetails,
      creditCardOptions,
      userDetail,
      optionColorTheme,
      font,
      callback(),
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#282828',
      }}>
      <Text
        style={{
          color: '#FAD70F',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Payment Simulasi
      </Text>
      <View style={{margin: 15, alignItems: 'center'}}>
        <Text style={styles.textWhite}>Transaksi 1</Text>
        <Text style={styles.textWhite}>Nama Item</Text>
        <Text style={styles.textWhite}>Price</Text>
        <Text style={styles.textWhite}>Quantity</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          didPembayaran();
        }}
        style={{
          backgroundColor: '#FAD70F',
          height: 35,
          borderRadius: 15,
          justifyContent: 'center',
          margin: 15,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          Snap API
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={didPayment}
        style={{
          backgroundColor: '#FAD70F',
          height: 35,
          borderRadius: 15,
          justifyContent: 'center',
          margin: 15,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          SDK API
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MidtransPayment;

const styles = StyleSheet.create({
  textWhite: {
    color: 'white',
  },
});
