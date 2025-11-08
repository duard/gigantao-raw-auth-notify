import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { sqlVarBaseToStr } from './utils/pass-utils';
import { JwtService } from '@nestjs/jwt';
import { TSIUSU } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<TSIUSU | null> {
    const hashedString = sqlVarBaseToStr(username, pass);
    const normalizedUsername = username.toLowerCase();

    const user = await this.prisma.tSIUSU.findFirst({
      where: {
        AND: [{ NOMEUSU: normalizedUsername }, { INTERNO: hashedString }],
      },
    });

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { INTERNO, ...result } = user;
      return result as TSIUSU;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.jwtService.sign({
      username: user.NOMEUSU,
      sub: user.CODUSU,
    });
    const refreshToken = this.jwtService.sign(
      { sub: user.CODUSU },
      { expiresIn: '7d' },
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(token: string) {
    try {
      const payload: { sub: number; username: string } =
        this.jwtService.verify(token);
      const user = await this.prisma.tSIUSU.findUnique({
        where: { CODUSU: payload.sub },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newAccessToken = this.jwtService.sign({
        username: user.NOMEUSU,
        sub: user.CODUSU,
      });
      const newRefreshToken = this.jwtService.sign(
        { sub: user.CODUSU },
        { expiresIn: '7d' },
      );

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
