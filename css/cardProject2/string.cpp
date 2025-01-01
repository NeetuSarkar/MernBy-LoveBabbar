#include<bits/stdc++.h>
using namespace std;

int main(){
    string str1;
    string str2;
    cin>>str1;
    cin>>str2;

    int arr[26];

    transform(str1.begin(), str1.end(), str1.begin(), ::toupper);
    transform(str2.begin(), str2.end(), str2.begin(), ::toupper);

    for(int i = 0; i < str1.size(); i++){
        arr[str1[i]-'a']++;
    }

    for(int i = 0; i < str1.size(); i++){
        arr[str2[i]-'a']--;
    }

    bool flag = true;
    for(int i = 0; i < 26; i++){
        if(arr[i] < 0){
            cout<<"NO"<<endl;
            flag = false;
        }
    }
    if(flag) cout<<"YES";
}