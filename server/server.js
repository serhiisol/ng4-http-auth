"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("@decorators/express");
const di_1 = require("@decorators/di");
let UsersController = class UsersController {
    constructor() {
        this.passUsers = false;
        this.passData = false;
    }
    login(res) {
        res.send(this.generateTokens());
    }
    refresh(res) {
        // emulate long request
        setTimeout(() => res.send(this.generateTokens()), 1000);
    }
    getUsers(res) {
        this.passUsers = !this.passUsers;
        if (this.passUsers) {
            res.send([
                {
                    'id': 1,
                    'name': 'John Doe'
                },
                {
                    'id': 2,
                    'name': 'Jane Doe'
                }
            ]);
        }
        else {
            res.status(401).send();
        }
    }
    getData(res) {
        this.passData = !this.passData;
        if (this.passData) {
            res.send([
                {
                    'id': 1,
                    'name': 'Pepsi'
                },
                {
                    'id': 2,
                    'name': 'Coca-Cola'
                }
            ]);
        }
        else {
            // emulate long request
            setTimeout(() => res.status(401).send(), 300);
        }
    }
    generateTokens() {
        return {
            accessToken: 'access-token-' + Math.random(),
            refreshToken: 'access-token-' + Math.random()
        };
    }
};
__decorate([
    express_1.Post('/login'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "login", null);
__decorate([
    express_1.Post('/refresh'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "refresh", null);
__decorate([
    express_1.Get('/users'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    express_1.Get('/data'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getData", null);
UsersController = __decorate([
    di_1.Injectable(),
    express_1.Controller('/')
], UsersController);
const app = express();
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
express_1.attachControllers(app, [
    UsersController
]);
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBRW5DLGlEQUF5RjtBQUN6Rix1Q0FBNEM7QUFJNUMsSUFBTSxlQUFlLEdBQXJCO0lBRkE7UUFJVSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUE4RDNCLENBQUM7SUEzRFEsS0FBSyxDQUFhLEdBQUc7UUFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR00sT0FBTyxDQUFhLEdBQUc7UUFDNUIsdUJBQXVCO1FBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFHTSxRQUFRLENBQWEsR0FBUTtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNMO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLE1BQU0sRUFBRSxVQUFVO2lCQUNyQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsQ0FBQztvQkFDUCxNQUFNLEVBQUUsVUFBVTtpQkFDckI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBR00sT0FBTyxDQUFhLEdBQVE7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFFOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDUDtvQkFDSSxJQUFJLEVBQUUsQ0FBQztvQkFDUCxNQUFNLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsTUFBTSxFQUFFLFdBQVc7aUJBQ3RCO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sdUJBQXVCO1lBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFFSCxDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLENBQUM7WUFDTCxXQUFXLEVBQUUsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUMsWUFBWSxFQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQzlDLENBQUM7SUFDSixDQUFDO0NBRUYsQ0FBQTtBQTNEQztJQURDLGNBQUksQ0FBQyxRQUFRLENBQUM7SUFDRCxXQUFBLGtCQUFRLEVBQUUsQ0FBQTs7Ozs0Q0FFdkI7QUFHRDtJQURDLGNBQUksQ0FBQyxVQUFVLENBQUM7SUFDRCxXQUFBLGtCQUFRLEVBQUUsQ0FBQTs7Ozs4Q0FHekI7QUFHRDtJQURDLGFBQUcsQ0FBQyxRQUFRLENBQUM7SUFDRyxXQUFBLGtCQUFRLEVBQUUsQ0FBQTs7OzsrQ0FpQjFCO0FBR0Q7SUFEQyxhQUFHLENBQUMsT0FBTyxDQUFDO0lBQ0csV0FBQSxrQkFBUSxFQUFFLENBQUE7Ozs7OENBbUJ6QjtBQXhERyxlQUFlO0lBRnBCLGVBQVUsRUFBRTtJQUNaLG9CQUFVLENBQUMsR0FBRyxDQUFDO0dBQ1YsZUFBZSxDQWlFcEI7QUFFRCxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQ04sSUFBcUIsRUFDckIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtJQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsK0RBQStELENBQ2hFLENBQUM7SUFDRixJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDO0FBRUgsMkJBQWlCLENBQUMsR0FBRyxFQUFFO0lBQ3JCLGVBQWU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBSZXNwb25zZSBhcyBSZXMgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFJlc3BvbnNlLCBDb250cm9sbGVyLCBHZXQsIFBvc3QsIGF0dGFjaENvbnRyb2xsZXJzIH0gZnJvbSAnQGRlY29yYXRvcnMvZXhwcmVzcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGRlY29yYXRvcnMvZGknO1xuXG5ASW5qZWN0YWJsZSgpXG5AQ29udHJvbGxlcignLycpXG5jbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuXG4gIHByaXZhdGUgcGFzc1VzZXJzID0gZmFsc2U7XG4gIHByaXZhdGUgcGFzc0RhdGEgPSBmYWxzZTtcblxuICBAUG9zdCgnL2xvZ2luJylcbiAgcHVibGljIGxvZ2luKEBSZXNwb25zZSgpIHJlcyk6IHZvaWQge1xuICAgIHJlcy5zZW5kKHRoaXMuZ2VuZXJhdGVUb2tlbnMoKSk7XG4gIH1cblxuICBAUG9zdCgnL3JlZnJlc2gnKVxuICBwdWJsaWMgcmVmcmVzaChAUmVzcG9uc2UoKSByZXMpOiB2b2lkIHtcbiAgICAvLyBlbXVsYXRlIGxvbmcgcmVxdWVzdFxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzLnNlbmQodGhpcy5nZW5lcmF0ZVRva2VucygpKSwgMTAwMCk7XG4gIH1cblxuICBAR2V0KCcvdXNlcnMnKVxuICBwdWJsaWMgZ2V0VXNlcnMoQFJlc3BvbnNlKCkgcmVzOiBSZXMpOiB2b2lkIHtcbiAgICB0aGlzLnBhc3NVc2VycyA9ICF0aGlzLnBhc3NVc2VycztcblxuICAgIGlmICh0aGlzLnBhc3NVc2Vycykge1xuICAgICAgcmVzLnNlbmQoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkJzogMSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnSm9obiBEb2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZCc6IDIsXG4gICAgICAgICAgICAgICduYW1lJzogJ0phbmUgRG9lJ1xuICAgICAgICAgIH1cbiAgICAgIF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgpO1xuICAgIH1cbiAgfVxuXG4gIEBHZXQoJy9kYXRhJylcbiAgcHVibGljIGdldERhdGEoQFJlc3BvbnNlKCkgcmVzOiBSZXMpOiB2b2lkIHtcbiAgICB0aGlzLnBhc3NEYXRhID0gIXRoaXMucGFzc0RhdGFcblxuICAgIGlmICh0aGlzLnBhc3NEYXRhKSB7XG4gICAgICByZXMuc2VuZChbXG4gICAgICAgIHtcbiAgICAgICAgICAgICdpZCc6IDEsXG4gICAgICAgICAgICAnbmFtZSc6ICdQZXBzaSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2lkJzogMixcbiAgICAgICAgICAgICduYW1lJzogJ0NvY2EtQ29sYSdcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVtdWxhdGUgbG9uZyByZXF1ZXN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlcy5zdGF0dXMoNDAxKS5zZW5kKCksIDMwMCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVG9rZW5zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NUb2tlbjogJ2FjY2Vzcy10b2tlbi0nICsgTWF0aC5yYW5kb20oKSxcbiAgICAgIHJlZnJlc2hUb2tlbjogJ2FjY2Vzcy10b2tlbi0nICsgTWF0aC5yYW5kb20oKVxuICAgIH07XG4gIH1cblxufVxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoKFxuICBfcmVxOiBleHByZXNzLlJlcXVlc3QsXG4gIHJlczogZXhwcmVzcy5SZXNwb25zZSxcbiAgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb25cbikgPT4ge1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICByZXMuaGVhZGVyKFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbidcbiAgKTtcbiAgbmV4dCgpO1xufSk7XG5cbmF0dGFjaENvbnRyb2xsZXJzKGFwcCwgW1xuICBVc2Vyc0NvbnRyb2xsZXJcbl0pO1xuXG5hcHAubGlzdGVuKDMwMDApO1xuIl19