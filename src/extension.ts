import * as vscode from 'vscode';
import {cons} from './cons'

export function activate(context: vscode.ExtensionContext) {

    var rab = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    rab.text = "Le gang des requins"; rab.tooltip = "requin gang est dans la place"; rab.command = 'akula.funone';
    rab.show();

    let dispo = vscode.commands.registerCommand('akula.funone', () => {
        rab.text = `$(sync~spin)`;
        const apr = setTimeout(() => {
            rab.text = "🦈🦈🦈🦈🦈🦈";
            vscode.window.showInformationMessage("You are now part of the requin gang 🦈🦈");
        }, 1500);
        const apv = setTimeout(() => {
            rab.text = "Le gang des requins";
        }, 3000);
    }); 

	context.subscriptions.push(dispo);
}


export function deactivate() {

}
