import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgficndEntity } from './tGFICND.entity';

@Index('PK_TGFCND', ['nucnd'], { unique: true })
@Entity('TGFCND', { schema: 'SANKHYA' })
export class TgfcndEntity {
  @Column('int', { primary: true, name: 'NUCND' })
  nucnd: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 100 })
  observacao: string | null;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('smallint', { name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @OneToMany(() => TgficndEntity, (tgficndEntity) => tgficndEntity.nucnd2)
  tgficnds: TgficndEntity[];
}
