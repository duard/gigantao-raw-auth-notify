import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcpoEntity } from './tGFCPO.entity';

@Index('PK_TGFCMB', ['codcombo'], { unique: true })
@Entity('TGFCMB', { schema: 'SANKHYA' })
export class TgfcmbEntity {
  @Column('int', { primary: true, name: 'CODCOMBO' })
  codcombo: number;

  @Column('varchar', { name: 'DESCRCOMBO', length: 30 })
  descrcombo: string;

  @Column('int', { name: 'CODCOMBOPAI' })
  codcombopai: number;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('char', { name: 'COMBO', length: 1, default: () => "'N'" })
  combo: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('varchar', { name: 'COR', nullable: true, length: 20 })
  cor: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @OneToMany(() => TgfcpoEntity, (tgfcpoEntity) => tgfcpoEntity.codcombo2)
  tgfcpos: TgfcpoEntity[];

  @OneToMany(() => TgfcpoEntity, (tgfcpoEntity) => tgfcpoEntity.codcombopai2)
  tgfcpos2: TgfcpoEntity[];
}
