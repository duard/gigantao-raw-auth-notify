import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgaahpEntity } from './tGAAHP.entity';
import { TgaparEntity } from './tGAPAR.entity';

@Index('PK_TGAMTP', ['codmot'], { unique: true })
@Entity('TGAMTP', { schema: 'SANKHYA' })
export class TgamtpEntity {
  @Column('int', { primary: true, name: 'CODMOT' })
  codmot: number;

  @Column('varchar', { name: 'DESCRMOT', length: 40 })
  descrmot: string;

  @Column('int', { name: 'CODMOTPAI', nullable: true })
  codmotpai: number | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('varchar', { name: 'INFHRPRODZ', length: 1, default: () => "'N'" })
  infhrprodz: string;

  @OneToMany(() => TgaahpEntity, (tgaahpEntity) => tgaahpEntity.codmot)
  tgaahps: TgaahpEntity[];

  @OneToMany(() => TgaparEntity, (tgaparEntity) => tgaparEntity.codmot)
  tgapars: TgaparEntity[];
}
