import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSISCHED__C9C113202FE9B884', ['nuagendamento'], { unique: true })
@Entity('TSISCHEDUPD', { schema: 'SANKHYA' })
export class TsischedupdEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 255 })
  filename: string | null;

  @Column('varchar', { name: 'PKGURL', nullable: true, length: 255 })
  pkgurl: string | null;

  @Column('varchar', { name: 'VERSAO', nullable: true, length: 50 })
  versao: string | null;

  @Column('datetime', { name: 'AGENDAMENTO', nullable: true })
  agendamento: Date | null;

  @Column('int', { name: 'PORT', nullable: true })
  port: number | null;

  @Column('varchar', { name: 'PROTOCOL', nullable: true, length: 50 })
  protocol: string | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'D'" })
  status: string;
}
