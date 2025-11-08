import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfunnEntity } from './tGFUNN.entity';

@Index('PK_TCSNHC', ['nunegociacao'], { unique: true })
@Entity('TCSNHC', { schema: 'SANKHYA' })
export class TcsnhcEntity {
  @Column('int', { primary: true, name: 'NUNEGOCIACAO' })
  nunegociacao: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIN' })
  dtfin: Date;

  @Column('int', { name: 'NUFAP' })
  nufap: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'VLRHORA', precision: 53 })
  vlrhora: number;

  @Column('float', {
    name: 'MULTHORAEXTRA',
    precision: 53,
    default: () => '(1)',
  })
  multhoraextra: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsnhcs)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.nunegociacao)
  tcsites: TcsiteEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsnhcs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsnhcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfunnEntity, (tgfunnEntity) => tgfunnEntity.tcsnhcs)
  @JoinColumn([{ name: 'CODUNNVENDEDORA', referencedColumnName: 'codunn' }])
  codunnvendedora: TgfunnEntity;

  @ManyToOne(() => TgfunnEntity, (tgfunnEntity) => tgfunnEntity.tcsnhcs2)
  @JoinColumn([{ name: 'CODUNNCOMPRADORA', referencedColumnName: 'codunn' }])
  codunncompradora: TgfunnEntity;
}
