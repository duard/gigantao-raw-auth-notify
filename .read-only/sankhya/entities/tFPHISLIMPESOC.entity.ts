import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPHISLIMPESOC', ['id'], { unique: true })
@Entity('TFPHISLIMPESOC', { schema: 'SANKHYA' })
export class TfphislimpesocEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 100 })
  id: string;

  @Column('datetime', { name: 'DHEXECINI', nullable: true })
  dhexecini: Date | null;

  @Column('datetime', { name: 'DHEXECFIM', nullable: true })
  dhexecfim: Date | null;

  @Column('text', { name: 'PARAMETROS', nullable: true })
  parametros: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
