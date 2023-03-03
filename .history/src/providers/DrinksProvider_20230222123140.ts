export interface IMenuCardProvider {
    test(): string;
}


export default class MenuCardProvider implements IMenuCardProvider {
    test(): string {
        throw new Error("Method not implemented.");
    }


}