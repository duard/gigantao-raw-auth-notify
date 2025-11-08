import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPINTCONFIG', ['codintconfig'], { unique: true })
@Entity('TFPINTCONFIG', { schema: 'SANKHYA' })
export class TfpintconfigEntity {
  @Column('int', { primary: true, name: 'CODINTCONFIG' })
  codintconfig: number;

  @Column('varchar', { name: 'PARCEIRO', length: 70 })
  parceiro: string;

  @Column('varchar', { name: 'TOKEN', nullable: true, length: 300 })
  token: string | null;

  @Column('varchar', { name: 'PROPRIEDADES', nullable: true, length: 900 })
  propriedades: string | null;
}
