import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIACE', ['resourceid', 'codusu'], { unique: true })
@Entity('TSIACE', { schema: 'SANKHYA' })
export class TsiaceEntity {
  @Column('varchar', { primary: true, name: 'RESOURCEID', length: 400 })
  resourceid: string;

  @Column('varchar', { name: 'LIBERADO', nullable: true, length: 1 })
  liberado: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'ALTERADOPELOUSUARIO', nullable: true, length: 1 })
  alteradopelousuario: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;
}
