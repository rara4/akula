import * as vscode from 'vscode';

export function cons(context: vscode.ExtensionContext) {
    let whoam = vscode.commands.registerCommand('akula.cons', () => {
    }); 

	context.subscriptions.push(whoam);
}


export function deactivate() {

}
