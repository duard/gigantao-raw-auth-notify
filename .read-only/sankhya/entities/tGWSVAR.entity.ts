import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWSVAR', ['nusepfilha', 'seqittfilha', 'nusepmae', 'seqittmae'], {
  unique: true,
})
@Entity('TGWSVAR', { schema: 'SANKHYA' })
export class TgwsvarEntity {
  @Column('int', { primary: true, name: 'NUSEPFILHA' })
  nusepfilha: number;

  @Column('int', { primary: true, name: 'SEQITTFILHA' })
  seqittfilha: number;

  @Column('int', { primary: true, name: 'NUSEPMAE' })
  nusepmae: number;

  @Column('int', { primary: true, name: 'SEQITTMAE' })
  seqittmae: number;

  @Column('float', { name: 'QTDFILHA', nullable: true, precision: 53 })
  qtdfilha: number | null;
}
