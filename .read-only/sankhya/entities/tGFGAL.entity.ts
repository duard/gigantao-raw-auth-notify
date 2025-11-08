import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfigaEntity } from './tGFIGA.entity';

@Index('PK_TGFGAL', ['galao', 'lote', 'ano'], { unique: true })
@Index('TGFGAL_IFK', ['nunota'], {})
@Entity('TGFGAL', { schema: 'SANKHYA' })
export class TgfgalEntity {
  @Column('smallint', { primary: true, name: 'GALAO' })
  galao: number;

  @Column('smallint', { primary: true, name: 'LOTE' })
  lote: number;

  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('datetime', {
    name: 'DTMOV',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtmov: Date;

  @Column('datetime', { name: 'DTENVASE' })
  dtenvase: Date;

  @Column('char', { name: 'FECHADO', length: 1, default: () => "'N'" })
  fechado: string;

  @Column('int', { name: 'CLASSIFICACAO', default: () => '(1)' })
  classificacao: number;

  @Column('varchar', { name: 'NROCAIXA', nullable: true, length: 10 })
  nrocaixa: string | null;

  @Column('float', { name: 'PESOAMOSTRA', precision: 53, default: () => '(0)' })
  pesoamostra: number;

  @Column('char', { name: 'STRLOTE', nullable: true, length: 8 })
  strlote: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfgals)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfigaEntity, (tgfigaEntity) => tgfigaEntity.tgfgal)
  tgfigas: TgfigaEntity[];
}
