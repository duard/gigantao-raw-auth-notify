import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_TDDAD', ['funcionalidade', 'nucontrole'], { unique: true })
@Entity('AD_TDDAD', { schema: 'SANKHYA' })
export class AdTddadEntity {
  @Column('int', { primary: true, name: 'NUCONTROLE' })
  nucontrole: number;

  @Column('varchar', { primary: true, name: 'FUNCIONALIDADE', length: 10 })
  funcionalidade: string;

  @Column('varchar', { name: 'DESCRCONTROLE', nullable: true, length: 100 })
  descrcontrole: string | null;

  @Column('varchar', { name: 'MENU', nullable: true, length: 100 })
  menu: string | null;

  @Column('int', { name: 'CODEXEC' })
  codexec: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;
}
