#include <iostream>
#include <string>
using namespace std;

int main(void)
{
    string name, ascii = "";
    int nameValue, rotation;
    
    cout << "Type something: ";
    getline(cin, name);

    cout << "Type the rotation value: ";
    cin >> rotation;


    for (int i = 0; i < name.length(); i++) {
        nameValue = int(name[i]) + rotation;
        /*
        if ((nameValue >= 65) && (nameValue <= 90) || (nameValue >= 97) && (nameValue <= 122)) {
            ascii += char(nameValue);  
        }
        */
        
        if (nameValue < 65) {
            nameValue += 26;
            ascii += char(nameValue);  
        } else if (nameValue > 90) {
            nameValue -= 26;
            ascii += char(nameValue);  
        } else if (nameValue < 97) {
            nameValue += 26;
            ascii += char(nameValue);  
        } else if (nameValue > 122) {
            nameValue -= 26;
            ascii += char(nameValue);  
        }
    }
    cout << ascii << endl;
    return 0;
}