import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXRTP', ['id'], { unique: true })
@Entity('TFXRTP', { schema: 'SANKHYA' })
export class TfxrtpEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NUTAB' })
  nutab: number;

  @Column('smallint', { name: 'CODTPV' })
  codtpv: number;

  @Column('datetime', { name: 'DHALTERTPV' })
  dhaltertpv: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;
}
