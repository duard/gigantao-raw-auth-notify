import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfembEntity } from './tGFEMB.entity';

@Index('PK_TGFCTF', ['nuctf'], { unique: true })
@Entity('TGFCTF', { schema: 'SANKHYA' })
export class TgfctfEntity {
  @Column('int', { primary: true, name: 'NUCTF' })
  nuctf: number;

  @Column('datetime', {
    name: 'DTMOV',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtmov: Date;

  @Column('datetime', { name: 'DTCOLETA' })
  dtcoleta: Date;

  @Column('float', { name: 'QTDBOLSA', precision: 53, default: () => '(0)' })
  qtdbolsa: number;

  @Column('float', { name: 'PESOBRUTO', precision: 53, default: () => '(0)' })
  pesobruto: number;

  @Column('float', { name: 'PESOTARA', precision: 53, default: () => '(0)' })
  pesotara: number;

  @Column('float', { name: 'PESOLIQUIDO', precision: 53, default: () => '(0)' })
  pesoliquido: number;

  @Column('float', {
    name: 'PESOEMBALADO',
    precision: 53,
    default: () => '(0)',
  })
  pesoembalado: number;

  @Column('char', { name: 'CONFERIDO', length: 1, default: () => "'N'" })
  conferido: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfctfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfctfs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TgfembEntity, (tgfembEntity) => tgfembEntity.nuctf)
  tgfembs: TgfembEntity[];
}
