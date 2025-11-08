import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiimcEntity } from './tSIIMC.entity';
import { TsiimfEntity } from './tSIIMF.entity';

@Index('PK_TSIRHI', ['coduni'], { unique: true })
@Index('TSIRHI_I01', ['programa', 'descricao', 'codcampopai'], { unique: true })
@Index('TSIRHI_I02', ['codcampo'], { unique: true })
@Index('TSIRHI_I03', ['codcampopai'], {})
@Entity('TSIRHI', { schema: 'SANKHYA' })
export class TsirhiEntity {
  @Column('int', { primary: true, name: 'CODUNI' })
  coduni: number;

  @Column('char', { name: 'PROGRAMA', length: 15 })
  programa: string;

  @Column('int', { name: 'CODCAMPO' })
  codcampo: number;

  @Column('int', { name: 'CODCAMPOPAI' })
  codcampopai: number;

  @Column('char', { name: 'SOHIERARQUIA', length: 1, default: () => "'N'" })
  sohierarquia: string;

  @Column('char', { name: 'DESCRICAO', length: 30 })
  descricao: string;

  @Column('int', { name: 'TAMANHO', default: () => '(0)' })
  tamanho: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'ALINHAMENTO' })
  alinhamento: number;

  @Column('char', { name: 'TOTALIZA', length: 1, default: () => "'N'" })
  totaliza: string;

  @Column('char', { name: 'MASCARA', nullable: true, length: 60 })
  mascara: string | null;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('text', { name: 'TABELAS', nullable: true })
  tabelas: string | null;

  @Column('text', { name: 'LIGACAO', nullable: true })
  ligacao: string | null;

  @Column('char', { name: 'SANKHYA', length: 1, default: () => "'N'" })
  sankhya: string;

  @Column('char', { name: 'ZERARNAQUEBRA', length: 1, default: () => "'N'" })
  zerarnaquebra: string;

  @OneToMany(() => TsiimcEntity, (tsiimcEntity) => tsiimcEntity.coduni)
  tsiimcs: TsiimcEntity[];

  @OneToMany(() => TsiimfEntity, (tsiimfEntity) => tsiimfEntity.coduni)
  tsiimfs: TsiimfEntity[];
}
