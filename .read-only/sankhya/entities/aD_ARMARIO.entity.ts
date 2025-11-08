import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_ARMARIO', ['codarmario'], { unique: true })
@Entity('AD_ARMARIO', { schema: 'SANKHYA' })
export class AdArmarioEntity {
  @Column('int', { primary: true, name: 'CODARMARIO' })
  codarmario: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('int', { name: 'NUARMARIO', nullable: true })
  nuarmario: number | null;

  @Column('varchar', { name: 'LOCAL_ARM', nullable: true, length: 10 })
  localArm: string | null;
}
