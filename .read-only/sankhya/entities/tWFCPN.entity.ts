import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFCPN', ['codprn', 'sequencia'], { unique: true })
@Entity('TWFCPN', { schema: 'SANKHYA' })
export class TwfcpnEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPUSUGRU', length: 1 })
  tipusugru: string;

  @Column('varchar', { name: 'PERMITEEDICAO', length: 1, default: () => "'N'" })
  permiteedicao: string;

  @Column('varchar', {
    name: 'PERMITECOMPARTILHAR',
    length: 1,
    default: () => "'N'",
  })
  permitecompartilhar: string;

  @Column('varchar', {
    name: 'PERMITEINICIAR',
    length: 1,
    default: () => "'N'",
  })
  permiteiniciar: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
