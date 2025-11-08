import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCOMMENT', ['id'], { unique: true })
@Entity('TFPCOMMENT', { schema: 'SANKHYA' })
export class TfpcommentEntity {
  @Column('int', { name: 'IDTIMELINE', nullable: true })
  idtimeline: number | null;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 255 })
  texto: string | null;

  @Column('datetime', {
    name: 'DTPOST',
    nullable: true,
    default: () => 'getdate()',
  })
  dtpost: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { primary: true, name: 'ID', default: () => '(0)' })
  id: number;
}
