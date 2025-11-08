import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBHCT', ['nuagendctz', 'tipo', 'dhctz'], { unique: true })
@Entity('TCBHCT', { schema: 'SANKHYA' })
export class TcbhctEntity {
  @Column('int', { primary: true, name: 'NUAGENDCTZ' })
  nuagendctz: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 3 })
  tipo: string;

  @Column('datetime', { primary: true, name: 'DHCTZ' })
  dhctz: Date;

  @Column('int', { name: 'QTDLANCTOT', nullable: true })
  qtdlanctot: number | null;

  @Column('int', { name: 'QTDLANCCTZ', nullable: true })
  qtdlancctz: number | null;

  @Column('int', { name: 'QTDLANCNCTZ', nullable: true })
  qtdlancnctz: number | null;

  @Column('int', { name: 'MINUTOSCTZ', nullable: true })
  minutosctz: number | null;

  @Column('varchar', { name: 'TIPOEXEC', nullable: true, length: 1 })
  tipoexec: string | null;

  @Column('text', { name: 'ERROEXEC', nullable: true })
  erroexec: string | null;

  @Column('varchar', { name: 'LIBERADA', nullable: true, length: 1 })
  liberada: string | null;
}
